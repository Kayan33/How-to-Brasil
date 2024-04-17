import React, { useState, useEffect } from "react";
import { api } from "../../api";
import { typesMoradia } from "../../types/moradia";
import "../../style/trabalho.css";
import { Link } from "react-router-dom";

function Trabalho() {
  const [ordem, setOrdem] = useState<string>("asc");
  const [moradia, setMoradia] = useState<typesMoradia[]>([]);

  useEffect(() => {
    carregarMoradia();
  }, []);

  useEffect(() => {

  }, [ordem, moradia])

  const carregarMoradia = async () => {
    try {
      const json = await api.carregarMoradia();
      const dataAraay = Array.isArray(json) ? json : [json];
      setMoradia(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };




  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Casa </h2>
        </div>

      </header>

      <main className="trabalho-bg">
        {moradia.map((local, index) => (
          <ul className="card" key={index}>
            {/* <img
              src={local.foto}
              id="foto-casa"
              alt={`Foto de ${local.nome}`}
            /> */}
            <li className="header-card">
              <h3>{local.moradia}</h3>
            </li>
            <hr />
            <li className="detalhes-imovel">
              <li>
                <h3>Quartos</h3>
                <p>{local.quartos}</p>
              </li>
              <li>
                <h3>Banheiro</h3>
                <p>{local.banheiro}</p>
              </li>
              <li>
                <h3>Vagas</h3>
                <p>{local.vagas}</p>
              </li>
            </li>
            <hr />
            <ul className="detalhes-valores">
              <li>
                <h2>{local.valor}</h2>
              </li>

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

            </ul>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Trabalho;
