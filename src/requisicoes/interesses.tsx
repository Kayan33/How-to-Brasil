import React, { useState, useEffect } from "react";
import { api } from "../api";
import { typesInteresses } from "../types/Interesses";

function InteressesBg() {
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

  return (
    <div>
    <h1>Interesses dos Usuários</h1>
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}>{usuario.nome}</li>
      ))}
    </ul>
  </div>
  );
}

export default InteressesBg;

