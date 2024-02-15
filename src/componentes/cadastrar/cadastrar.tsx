import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { typeUsuario } from "../../types/usuarios";
import { api } from "../../api";

function Cadastro() {
  const [email, SetEmail] = useState("");
  const [nome, Setnome] = useState("");
  const [ultimoNome, SetultimoNome] = useState("");
  const [senha, SetSenha] = useState("");
  const [confirmacaosenha, SetConfirmacaoSenha] = useState("");
  const [statusMigratorio, setstatusMigratorio] = useState("");
  const [interesses, setinteresses] = useState("");

  function handleInputEmail(event: React.ChangeEvent<HTMLInputElement>) {
    SetEmail(event.target.value);
  }

  function handleInputnome(event: React.ChangeEvent<HTMLInputElement>) {
    Setnome(event.target.value);
  }

  function handleInputultimoNome(event: React.ChangeEvent<HTMLInputElement>) {
    SetultimoNome(event.target.value);
  }

  function handleInputSenha(event: React.ChangeEvent<HTMLInputElement>) {
    SetSenha(event.target.value);
  }

  function handleInputConfirmacaoSenha(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    SetConfirmacaoSenha(event.target.value);
  }

  function handleinteresses(event: React.ChangeEvent<HTMLSelectElement>) {
    setstatusMigratorio(event.target.value);
  }

  function handleInteresses(event: React.ChangeEvent<HTMLSelectElement>) {
    setstatusMigratorio(event.target.value);
  }

  const [usuarios, setUsuarios] = useState<typeUsuario[]>([]);

  useEffect(() => {}, []);

  const handleCadastro = async () => {
    let json = await api.adicionarUsuario(nome, ultimoNome,statusMigratorio,interesses,email,senha);
    if (json.id) {
      alert("Post Adicionado com sucesso!");
      setUsuarios((usuarios) => [...usuarios, json]);
    } else {
      alert("Falha ao adicionar usuário");
    }
  };

  return (
    <div className="divlogin">
      <div className="divlogin1">
        <Link className="logo" to="/">
          How to brasil
        </Link>

        <p className="acesso">
          <strong>cadastre-se</strong>
        </p>
        <p className="acesso1">Insira seu e-mail e senha para fazer login. </p>

        <input
          type="email"
          placeholder="email@email.com.br"
          value={email}
          onChange={handleInputEmail}
        />
        <input
          type="text"
          placeholder="Primeiro nome"
          value={nome}
          onChange={handleInputnome}
        />
        <input
          type="text"
          placeholder="Último nome"
          value={ultimoNome}
          onChange={handleInputultimoNome}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={handleInputSenha}
        />

        <input
          type="password"
          placeholder="Confirmação de senha"
          value={confirmacaosenha}
          onChange={handleInputConfirmacaoSenha}
        />
        <div className="select">
          <select value={statusMigratorio} onChange={handleinteresses}>
            <option value="" disabled>
              Status Migratório
            </option>
            <option value="option1">Turista</option>
            <option value="option2">Estudante</option>
            <option value="option2">Refugiado</option>
            <option value="option2">Asilado</option>
            <option value="option2">Trabalhador Temporrário</option>
            <option value="option2">Residente Permanente</option>
          </select>

          <select value={interesses} onChange={handleInteresses} multiple>
            <option value="" disabled>
              Status Migratório
            </option>
            <option value="option1">Turista</option>
            <option value="option2">Estudante</option>
            <option value="option2">Refugiado</option>
            <option value="option2">Asilado</option>
            <option value="option2">Trabalhador Temporrário</option>
            <option value="option2">Residente Permanente</option>
          </select>
        </div>

        <button className="entrar" onClick={handleCadastro}>
          Cadastrar
        </button>
        <div className="cadastre-se">
          <p>Já tem conta? Faça seu </p>
          <Link to="/Login">login.</Link>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
