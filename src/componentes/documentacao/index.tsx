import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
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


  return (
    <div className="trabalho-container">

      <div className="container-perguntas">
        <h1>Documentação</h1>
        <ul className="container-peguntas-respostas">
          {documentacao.map((local, index) => (
            <li
              key={index}
              className={`pergunta ${
                perguntaExpandida === index && "pergunta-expandida"
              }`}
              onClick={() => handlePerguntaClick(index)}
            >
              <div>
                {local.documento}
                <img src="mais.svg" alt="Mais" />
              </div>
              
              {perguntaExpandida === index && (
                <div className="resposta">
                <p>{local.descricao}</p> 
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
