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

  const carregarMoradia = async () => {
    try {
      const json = await api.carregarMoradia();
      const dataAraay = Array.isArray(json) ? json : [json];
      setMoradia(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  const ordenarPorValor = (a: typesMoradia, b: typesMoradia) => {
    const valorA = parseFloat(a.valor.replace(/[^\d.-]/g, ""));
    const valorB = parseFloat(b.valor.replace(/[^\d.-]/g, ""));

    if (ordem === "asc") {
      return valorA - valorB;
    } else {
      return valorB - valorA;
    }
  };

  const locaisOrdenados = [...moradia].sort(ordenarPorValor);

  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">

        <h2>Casa </h2>
       
       

        <Link className="header-link-trabalho " to="/abrigamento">
          Abrigamento
        </Link>
        
        </div>

        <div className="input-wrapper">
          <div className="select-wrapper">
            <select value={ordem} onChange={(ev) => setOrdem(ev.target.value)}>
              <option value="asc">Barato → Caro</option>
              <option value="desc">Caro → Barato</option>
            </select>
          </div>
        </div>
      </header>

      <main className="trabalho-bg">
        {locaisOrdenados.map((local, index) => (
          <ul className="card" key={index}>
            <img
              src={local.foto}
              id="foto-casa"
              alt={`Foto de ${local.nome}`}
            />
            <li className="header-card">
              <h3>{local.nome}</h3>
            </li>
            <li className="header-card">
              <p>{local.endereco}</p>
            </li>
            <hr />
            <li className="detalhes-imovel">
              <li>
                <h3>area</h3>
                <p>{local.area}</p>
              </li>
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
              {local.linkCorrelatos && (
                <li>
                  <a
                    className="saiba-mais"
                    href={local.linkCorrelatos}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VER MAIS
                  </a>
                </li>
              )}
            </ul>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Trabalho;
