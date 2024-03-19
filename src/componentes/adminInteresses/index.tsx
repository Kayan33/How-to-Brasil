import React, { useState } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { Adminapi } from "../../adminapi";

const DmInteresses: React.FC = () => {
  const [tipos, Settipos] = useState<number>(0); // Defina o tipo como number
  const [nome, SetNome] = useState("");
  const [Numero, SetNumero] = useState("");
  const [Horario, SetHorario] = useState("");
  const [LinkMaps, SetLinkMaps] = useState("");
  const [adminInteresee, setAdminInteresee] = useState<typesInteresses[]>([]);

  const handleInputTipos = (event: React.ChangeEvent<HTMLInputElement>) => {
    Settipos(parseInt(event.target.value)); // Converta a string para número
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

  const handleInteresse = async () => {
    const json = await Adminapi.adicionarInteresses(
      tipos,
      nome,
      Numero,
      Horario,
      LinkMaps
    );

    if (json.status === 200) {
      alert("Cadastro feito com sucesso!");
      setAdminInteresee((cadastro) => [...cadastro, json]);
    } else {
      alert(json.message);
    }
  };

  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Interesses </h2>
          <div className="categoria-interesse">
            <h5>saude=1</h5>
            <h5>educação=2</h5>
            <h5>apoio=3</h5>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Nome empresa"
              value={nome}
              onChange={handleInputNome}
            />
            <input
              type="text"
              placeholder="Número"
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
              min="1" max="3"
            />

            
            <button className="s" onClick={handleInteresse}>
              enviar
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DmInteresses;
