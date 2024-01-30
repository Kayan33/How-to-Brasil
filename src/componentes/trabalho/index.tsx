import React from "react";
import { Link } from "react-router-dom";
import "../../style/trabalho.css";

const locaisDeTrabalho = [
  {
    nome: "UBS Bela Vista",
    endereco: "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
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
    endereco: "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
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
    endereco: "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
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
    endereco: "R. Marçal de Arruda Campos, Quadra 4 - Centro, Bauru - SP, 17063-060",
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
  return (
    <div className="trabalho-container">
      <div className="trabalho-filtro">
        <h1>TRABALHO</h1>
        <p>tudo</p>
      </div>
      <div className="trabalho-bg">
        {locaisDeTrabalho.map((local, index) => (
          <div className="trabalho-img" key={index}>
            <h3>{local.nome}</h3>
            <div className="trabalho-texto">
              <h3>Endereço :</h3>
              <p>{local.endereco}</p>
            </div>
            <div className="trabalho-texto">
              <h3>Telefone :</h3>
              <p>{local.telefone}</p>
            </div>
            <div className="trabalho-texto">
              <h3>Horário de funcionamento :</h3>
              <p>
                {Object.entries(local.horarioFuncionamento).map(([dia, horario]) => (
                  <React.Fragment key={dia}>
                    {`${dia}: ${horario}`}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <hr />
            <a href={local.linkMapa}>
              <img src="maps.svg" alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trabalho;
