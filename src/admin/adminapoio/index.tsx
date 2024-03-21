import React, { useEffect, useState } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";

import { Adminapi } from "../../adminapi";
import { api } from "../../api";

const DnApoio: React.FC = () => {
  const [tipos, Settipos] = useState<number>(0);
  const [nome, SetNome] = useState("");
  const [Numero, SetNumero] = useState("");
  const [Horario, SetHorario] = useState("");
  const [LinkMaps, SetLinkMaps] = useState("");
  const [adminApoio, setAdminApoio] = useState<typesInteresses[]>([]);

  const handleInputTipos = (event: React.ChangeEvent<HTMLInputElement>) => {
    Settipos(parseInt(event.target.value));
  };

  const handleInputNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetNome(event.target.value);
  };

  const handleInputNumero = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetNumero(event.target.value);
  };

  const handleInputHorario = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetHorario(event.target.value);
  };

  const handleInputLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetLinkMaps(event.target.value);
  };

  useEffect(() => {
    carregarInteresses();
  }, []);

  const handleInteresse = async () => {
  try {
    const json = await Adminapi.adicionarInteresses(
      tipos,
      nome,
      Numero,
      Horario,
      LinkMaps
    );

    setAdminApoio((cadastro) => [...cadastro, json]);

    SetNome("");
    SetNumero("");
    SetHorario("");
    SetLinkMaps("");
    
  } catch (error) {
    console.error("Erro ao adicionar interesse:", error);
  }
};



  const carregarInteresses = async () => {
    try {
      const json = await api.carregarApoio();
      const dataAraay = Array.isArray(json) ? json : [json];

      setAdminApoio(dataAraay);
    } catch (error) {
      console.error("Erro ao carregar interesses:", error);
    }
  };

  
  const handleDeletInteresses = async (id: string) => {
    try {
      const json = await Adminapi.deleteInteresse(id);
      const dataAraay = Array.isArray(json) ? json : [json];

      const updatedInteresses = adminApoio.filter(
        (inter) => inter.id !== id
      );

      setAdminApoio(updatedInteresses);
      if (json.status) {
      } else {
        alert(json.message);
      }
    } catch (error) {
      console.error("Erro ao adicionar interesse:", error);
    }
  };

  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Admin Apoio </h2>

          <h5>Apoio=3</h5>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Nome empresa"
              value={nome}
              onChange={handleInputNome}
            />
            <input
              type="text"
              placeholder="telefone"
              value={Numero}
              onChange={handleInputNumero}
            />
            <input
              type="text"
              placeholder="Link Maps"
              value={LinkMaps}
              onChange={handleInputLink}
            />

            <input
              type="text"
              placeholder="Horaio"
              value={Horario}
              onChange={handleInputHorario}
            />

            <input
              type="number"
              placeholder="Tipo"
              value={tipos}
              onChange={handleInputTipos}
              min="3"
              max="3"
            />

            <button className="s" onClick={handleInteresse}>
              enviar
            </button>
          </div>
        </div>
      </header>

      <main className="trabalho-bg">
        {adminApoio.map((local, index) => (
          <ul className="card" key={index}>
            <img
              src="/remouve.svg"
              alt=""
              className="remove"
              onClick={() => handleDeletInteresses(local.id)}
            />

            <h3>{local.nome}</h3>

            <li className="header-card">
              <h3>Telefone :</h3>
              <p>{local.Numero}</p>
            </li>
            <li className="header-card">
              <h3>Horário de funcionamento :</h3>
              <p>{local.Horario}</p>
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
};

export default DnApoio;
