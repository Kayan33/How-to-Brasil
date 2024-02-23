import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";
import { typeDocumento } from "../../types/documentacao";

const TEMPO_DE_ESPERA = 150;

function Documentacao() {
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [documentacao, setDocumentacao] = useState<typeDocumento[]>([]);
  const [perguntaExpandida, setPerguntaExpandida] = useState<number | null>(
    null
  );

  const handlePerguntaClick = (index: number) => {
    if (perguntaExpandida === index) {
      setPerguntaExpandida(null);
    } else {
      setTimeout(() => {
        setPerguntaExpandida(index);
      }, TEMPO_DE_ESPERA);
    }
  };

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarDocumentacao();
      const dataAraay = Array.isArray(json) ? json : [json];
      setDocumentacao(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  const locaisFiltrados = documentacao.filter((local) =>
    local.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="trabalho-container">
      <header className="header-input">
        <h2>Documentação</h2>
        <div className="input-wrapper">
          <div>
            <input
              type="text"
              value={termoBusca}
              onChange={(ev) => setTermoBusca(ev.target.value)}
              placeholder="Digite o nome do local"
            />
          </div>
          <div className="select-wrapper">
            <select
              value={termoBusca}
              onChange={(ev) => setTermoBusca(ev.target.value)}
            >
              <option value="">Filtro</option>
              <option value="Farmacia">Farmacia</option>
              <option value="Posto de Saude">Posto de Saude</option>
              <option value="Refugiado">Refugiado</option>
              <option value="Asilado">Asilado</option>
              <option value="Trabalhador Temporário">
                Trabalhador Temporário
              </option>
              <option value="Residente Permanente">Residente Permanente</option>
            </select>
          </div>
        </div>
      </header>

      <div className="container-perguntas">
        <h1>Perguntas frequentes</h1>
        <ul className="container-peguntas-respostas">
          {locaisFiltrados.map((local, index) => (
            <li
              key={index}
              className={`pergunta ${
                perguntaExpandida === index && "pergunta-expandida"
              }`}
              onClick={() => handlePerguntaClick(index)}
            >
              <div>
                {local.nome}
                <img src="mais.svg" alt="Mais" />
              </div>

              {perguntaExpandida === index && (
                <div className="resposta">
                  {local.documentacao}
                  {local.documentacao}
                  <a href={local.linkGoverno as string}>Link para o governo</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Documentacao;
