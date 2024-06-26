import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";

function Saude() {
  const [termoBusca, setTermoBusca] = useState<string>("");

  const [saude, setSaude] = useState<typesInteresses[]>([]);

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

  const locaisFiltrados = saude.filter((local) =>
    local.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );
  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Saúde </h2>

          
        </div>
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
              <option value="Núcleo">Núcleo</option>
              <option value="UBS">Posto de Saude</option>
              <option value="UPA">UPA</option>
            </select>
          </div>
        </div>
      </header>

      <main className="trabalho-bg">
        {locaisFiltrados.map((local, index) => (
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

export default Saude;
