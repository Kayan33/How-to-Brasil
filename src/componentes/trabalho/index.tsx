import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";

const locaisDeTrabalho = [
  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
  },
  {
    nome: "Farmacia",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
  },
  {
    nome: "Posto de Saude",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
  },
  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
  },

  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
  },

  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    telefone: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com/",
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
            <h3>{local.nome}</h3>
            <li className="header-card">
              <h3>Endereço :</h3>
              <p>{local.endereco}</p>
            </li>
            <li className="header-card">
              <h3>Telefone :</h3>
              <p>{local.telefone}</p>
            </li>
            <li className="header-card">
              <h3>Horário de funcionamento :</h3>
              <p>
                {Object.entries(local.horarioFuncionamento).map(
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
            <a href={local.linkMapa}>
              <img src="maps.svg" alt="" />
            </a>
          </ul>
        ))}
      </main>
  </div>

    
  );
}

export default Trabalho;
