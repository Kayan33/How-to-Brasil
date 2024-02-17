import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";



function Trabalho() {
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [locaisDeTrabalho, setLocaisDeTrabalho] = useState<typesInteresses[]>([]);

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarInterreses();
      const dataAraay = Array.isArray(json) ? json : [json];
      setLocaisDeTrabalho(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  const locaisFiltrados = locaisDeTrabalho.filter((local) =>
    local.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div className="trabalho-container">
      <header className="header-input">
        <h1>TRABALHO</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={termoBusca}
            onChange={(ev) => setTermoBusca(ev.target.value)}
            placeholder="Digite o nome do local"
          />
        </div>
      </header>

      <main className="trabalho-bg">
        {locaisFiltrados.map((local, index) => (
          <ul className="card" key={index}>
            <h3>{local.nome}</h3>
            {/* <li className="header-card">
              <h3>Endereço :</h3>
              <p>{local.Numero}</p>
            </li> */}
            <li className="header-card">
              <h3>Telefone :</h3>
              <p>{local.Numero}</p>
            </li>
            <li className="header-card">
              <h3>Horário de funcionamento :</h3>
              <p>
                {Object.entries(local.Horario).map(
                  ([dia, horario]) => (
                    <React.Fragment key={dia}>
                      {`${dia}: ${horario}`}
                      <br />
                    </React.Fragment>
                  )
                )}
              </p>
            </li>
            <hr />
            <a href={local.LinkMaps}>
              <img src="maps.svg" alt="" />
            </a>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Trabalho;

