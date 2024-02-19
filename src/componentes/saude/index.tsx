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
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMaps: "https://www.google.com.br/maps/search/UBS/@-22.3222341,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
  },
  {
    nome: "Farmacia",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com.br/maps/search/Farm%C3%A1cias/@-22.3222745,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
  },
  {
    nome: "Posto de Saude",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com.br/maps/search/postos+de+saude/@-22.3221938,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
  },
  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com.br/maps/search/UBS/@-22.3222341,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
  },

  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com.br/maps/search/UBS/@-22.3222341,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
  },

  {
    nome: "UBS Bela Vista",
    endereco:
      "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
    contato: "(14) 99683-9244",
    horarioFuncionamento: {
      segunda: "12:00 - 22:00",
      terca: "12:00 - 22:00",
      quarta: "12:00 - 22:00",
      quinta: "12:00 - 22:00",
      sexta: "12:00 - 22:00",
      sabado: "12:00 - 16:00",
      domingo: "12:00 - 16:00",
    },
    linkMapa: "https://www.google.com.br/maps/search/UBS/@-22.3222341,-49.0716195,15z/data=!3m1!4b1?entry=ttu",
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
              <h3>contato :</h3>
              <p>{local.contato}</p>
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
