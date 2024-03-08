import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { api } from "../../api";
import { typesInteresses } from "../../types/Interesses";

const TEMPO_DE_ESPERA = 150;

function DuvidasSaude() {
  const [saude, setSaude] = useState<typesInteresses[]>([]);
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
      const json = await api.carregarSaude();
      const dataAraay = Array.isArray(json) ? json : [json];
      setSaude(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  

  return (
    <div className="trabalho-container">
      <div className="container-perguntas">
        <div className="header-nome">
          <h2>Dúvidas Saúde </h2>

          <Link className="header-link-trabalho " to="/saude">
          Saúde
          </Link>
        </div>
        <ul className="container-peguntas-respostas">
          {saude.map((local, index) => (
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

export default DuvidasSaude;
