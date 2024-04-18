import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";

function Educacao() {
  const [educacao, setEducacao] = useState<typesInteresses[]>([]);

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarEducacao();
      const dataAraay = Array.isArray(json) ? json : [json];

      setEducacao(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };
  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Educação </h2>
        </div>
      </header>

      <main className="trabalho-bg">
        {educacao.map((local, index) => (
          <ul className="card" key={index}>
            <h3>{local.nome}</h3>

            <li className="header-card">
              <h3>Telefone :</h3>
              <p>{local.numero}</p>
            </li>
            <li className="header-card">
              <h3>descrição</h3>
              <p>{local.descricao}</p>
            </li>
            <li className="header-card">
              <h3>Horário de funcionamento :</h3>
              <p>{local.horario}</p>
            </li>
            <hr />
            <div className="detalhes-valores">
              
            <a href={local.linkMaps}>
              <img src="maps.svg" alt="" />
            </a>
            <li>
              <a
                className="saiba-mais"
                href={local.linkCorrelato}
                target="_blank"
                rel="noopener noreferrer"
              >
                VER MAIS
              </a>
            </li>
            </div>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Educacao;
