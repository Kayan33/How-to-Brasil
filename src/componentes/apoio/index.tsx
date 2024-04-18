import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";



function Apoio() {
  const [termoBusca, setTermoBusca] = useState<string>("");

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

  const locaisFiltrados = apoio.filter((local) =>
    local.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );
  return (
    <div className="trabalho-container">
    <header className="header-input">
    <div className="header-nome">
          <h2>Apoio </h2>

          
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
