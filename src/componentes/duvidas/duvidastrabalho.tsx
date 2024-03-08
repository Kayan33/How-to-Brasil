import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { api } from "../../api";
import { typesTrabalho } from "../../types/trabalho";

const TEMPO_DE_ESPERA = 150;

function DuvidasTrabalho() {
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [trabalho, setTrabalho] = useState<typesTrabalho[]>([]);
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
      const json = await api.carregarTrabalho();
      const dataAraay = Array.isArray(json) ? json : [json];
      setTrabalho(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };


  return (
    <div className="trabalho-container">
      <div className="container-perguntas">
        <div className="header-nome">
          <h2>Dúvidas Trabalho </h2>

          <Link className="header-link-trabalho " to="/trabalho">
          trabalho
          </Link>
        </div>
        <ul className="container-peguntas-respostas">
          {trabalho.map((local, index) => (
            <li
              key={index}
              className={`pergunta ${
                perguntaExpandida === index && "pergunta-expandida"
              }`}
              onClick={() => handlePerguntaClick(index)}
            >
              <div>
                {local.interacao}
                <img src="mais.svg" alt="Mais" />
              </div>

              {perguntaExpandida === index && (
                <div className="resposta">
                  <p>{local.subInteracao}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DuvidasTrabalho;
