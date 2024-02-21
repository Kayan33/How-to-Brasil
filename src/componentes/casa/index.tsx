import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";

const locaisDeTrabalho = [
  {
    nome: "Apartamento - Parque Bogota",
    endereco: "Parque Bauru - Bauru",
    area: "47m²",
    quartos: 2,
    valor: "R$ 600,00",
    banheiro: 1,
    foto: "https://i.im.ge/2024/02/22/g9vOdW.6677457054.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=9942",
  },
  {
    nome: "Apartamento - Spazio Beluno",
    endereco: "Parque Uniao - Bauru",
    area: "47m²",
    quartos: 2,
    valor: "R$ 600,00",
    banheiro: 1,
    vagas:1,
    foto: "https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=8691",
  },
  {
    nome: "Kitinete",
    endereco: "Jardim Helena - Bauru",
    area: "25m²",
    quartos: 1,
    valor: "R$ 600,00",
    banheiro: 1,
    vagas:1,
    foto: "https://i.im.ge/2024/02/22/g9J1Bh.6687539123.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=8691",
  },
  {
    nome: "Apartamento - Parque Bogota",
    endereco: "Parque Bauru - Bauru",
    area: "47m²",
    quartos: 2,
    valor: "R$ 600,00",
    banheiro: 1,
    vagas:1,
    foto: "https://i.im.ge/2024/02/21/g9g9ur.Design-sem-nome.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=8691",
  },

  {
    nome: "Apartamento - Parque Bogota",
    endereco: "Parque Bauru - Bauru",
    area: "47m²",
    quartos: 2,
    valor: "R$ 600,00",
    banheiro: 1,
    vagas:1,
    foto: "https://i.im.ge/2024/02/21/g9g9ur.Design-sem-nome.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=8691",
  },

  {
    nome: "Apartamento - Parque Bogota",
    endereco: "Parque Bauru - Bauru",
    area: "47m²",
    quartos: "",
    valor: "R$ 600,00",
    banheiro: 1,
    vagas:1,
    foto: "https://i.im.ge/2024/02/21/g9g9ur.Design-sem-nome.jpg",
    linkCorrelatos:
      "https://www.imobiliariacentral.com/detalhes-imovel.php?cod_imovel=8691",
  },
];

function Trabalho() {
  const [termoBusca, setTermoBusca] = useState<string>("");

  const [usuarios, setUsuarios] = useState<typesInteresses[]>([]);

  useEffect(() => {
    carregarInteresses();
  }, []);

  const carregarInteresses = async () => {
    try {
      const json = await api.carregarInterreses();
      const dataAraay = Array.isArray(json) ? json : [json];

      setUsuarios(dataAraay);
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
            <img src={local.foto} alt={local.nome} id="foto-casa" />

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

              <li>
                {local.linkCorrelatos && (
                  <a className="saiba-mais" href={local.linkCorrelatos} target="_blank">
                  VER MAIS
                </a>
                )}
              </li>
            </ul>
          </ul>
        ))}
      </main>
    </div>
  );
}

export default Trabalho;
