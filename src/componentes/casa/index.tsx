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
    ordenarMoradia();
  }, [ordem, moradia]);

  const carregarMoradia = async () => {
    try {
      const json = await api.carregarMoradia();
      const dataAraay = Array.isArray(json) ? json : [json];
      setMoradia(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  const ordenarMoradia = () => {
    const moradiasOrdenadas = [...moradia].sort((a, b) => {
      if (ordem === "asc") {
        return a.valor - b.valor;
      } else {
        return b.valor - a.valor;
      }
    });
    setMoradia(moradiasOrdenadas);
  };

  const formatarValor = (valorEmCentavos: number) => {
    const valorEmReais = (valorEmCentavos / 100).toFixed(2);
    return `R$ ${valorEmReais}`;
  };

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
              <option value="asc">Menor valor → Maior valor</option>
              <option value="desc">Maior valor → Menor valor</option>
            </select>
          </div>
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
                <h2>{formatarValor(local.valor)}</h2>
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
