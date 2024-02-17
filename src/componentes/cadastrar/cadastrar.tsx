import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { typeCadastro } from "../../types/cadastro";
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

  function handleMigratorio(event: React.ChangeEvent<HTMLSelectElement>) {
    setstatusMigratorio(event.target.value);
  }

  function handleInteresses(event: React.ChangeEvent<HTMLSelectElement>) {
    setinteresses(event.target.value);
  }

  const [cadastro, setCadastro] = useState<typeCadastro[]>([]);

  useEffect(() => {}, []);

  const handleCadastro = async () => {
    let json = await api.adicionarCadastro(
      nome,
      ultimoNome,
      statusMigratorio.toString(),
      interesses.toString(),
      email,
      senha
    );
    if (json.id) {
      alert("Post Adicionado com sucesso!");
      setCadastro((cadastro) => [...cadastro, json]);
    } else {
      alert("Falha ao adicionar usuário");
    }
    console.log(json);
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

          <select value={statusMigratorio} onChange={handleMigratorio}>
            <option disabled>Status Migratório</option>
            <option value="Turista">Turista</option>
            <option value="Estudante">Estudante</option>
            <option value="Refugiado">Refugiado</option>
            <option value="Asilado">Asilado</option>
            <option value="Trabalhador Temporrário">
              Trabalhador Temporário
            </option>
            <option value="Residente Permanente">Residente Permanente</option>
          </select>

          <select value={interesses} onChange={handleInteresses}>
            <option disabled>Interesses</option>
            <option value="Saúde">Saúde</option>
            <option value="trabalho">trabalho</option>
            <option value="Refugiado">Apio comunitário</option>
            <option value="Educação">Educação</option>
            <option value="Casa">Casa</option>
            <option value="Documentação">Documentação</option>
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
