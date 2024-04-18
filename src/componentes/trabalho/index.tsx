import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { api } from "../../api";
import { typesTrabalho } from "../../types/trabalho";



function Trabalho() {
  const [locaisDeTrabalho, setLocaisDeTrabalho] = useState<typesTrabalho[]>([]);

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarTrabalho();
      const dataAraay = Array.isArray(json) ? json : [json];
      setLocaisDeTrabalho(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  

  return (
    <div className="trabalho-container">
      <header className="header-input">
      <div className="header-nome">
          <h2>Trabalho </h2>

          
        </div>
      </header>

      <main className="trabalho-bg">
        {locaisDeTrabalho.map((local, index) => (
          <ul className="card" key={index}>
            <h3>{local.trabalho}</h3>
            
            <li className="header-card">
              <h3>Requisitos :</h3>
              <p>{local.preRequisitos}</p>
            </li>
            <li className="header-card">
              <h3>salário:</h3>
              <p>
                {local.salario}
              </p>
            </li>
            <li className="header-card">
              <h3>Descrição:</h3>
              <p>
                {local.descricao}
              </p>
            </li>
            <hr />
            <li>
                <a
                  className="saiba-mais"
                  href={local.siteEmpresa}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VER MAIS
                </a>
              </li>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Trabalho;

