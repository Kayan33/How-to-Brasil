import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";



function Apoio() {
  const [apoio, setApoio] = useState<typesInteresses[]>([]);

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarApoio();
      const dataAraay = Array.isArray(json) ? json : [json];

      setApoio(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  
  return (
    <div className="trabalho-container">
    <header className="header-input">
    <div className="header-nome">
          <h2>Apoio </h2>

          
        </div>
    </header>

    <main className="trabalho-bg">
        {apoio.map((local, index) => (
          <ul className="card" key={index}>
            <h3>{local.nome}</h3>
            
            <li className="header-card">
              <h3>Telefone :</h3>
              <p>{local.numero}</p>
            </li>
            <li className="header-card">
              <h3>Horário de funcionamento :</h3>
              <p>{local.horario}</p>
            </li>
            <li className="header-card">
              <h3>Descrição :</h3>
              <p>{local.descricao}</p>
            </li>
            <hr />
            <a href={local.linkMaps}>
              <img src="maps.svg" alt="" />
            </a>
          </ul>
        ))}
      </main>
  </div>

    
  );
}

export default Apoio;
