import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { typeCadastro } from "../../types/cadastro";
import { api } from "../../api";

function Cadastro() {
  const [email, SetEmail] = useState("");
  const [nome, Setnome] = useState("");
  const [ultimoNome, SetultimoNome] = useState("");
  const [senha, SetSenha] = useState("");
  const [confirmarSenha, SetConfirmarSenha] = useState("");
  const [statusMigratorio, setstatusMigratorio] = useState("");
  const [interesses, setinteresses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [cadastro, setCadastro] = useState<typeCadastro[]>([]);

  const navigate = useNavigate();

  const handleInputInteresses = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    if (checked) {
      setinteresses((prevInteresses) => [...prevInteresses, name]);
    } else {
      setinteresses((prevInteresses) =>
        prevInteresses.filter((item) => item !== name)
      );
    }
  };

  useEffect(() => {}, []);

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

  function handleInputConfirmarSenha(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    SetConfirmarSenha(event.target.value);
  }
  function handleMigratorio(event: React.ChangeEvent<HTMLSelectElement>) {
    setstatusMigratorio(event.target.value);
  }

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais. Por favor, verifique.");
      return;
    }

    const json = await api.adicionarCadastro(
      nome,
      ultimoNome,
      statusMigratorio.toString(),
      interesses.toString(),
      email,
      senha
    );

    if ((json.return)) {
      setLoading(false);
      alert("Cadastro feito com sucesso!");
      setCadastro((cadastro) => [...cadastro, json]);
      navigate("/Login");
    } else {
      setLoading(false);
      alert(json.message);
    }
  };

  return (
    <>
      <div className="login-container">
        {loading && <div> Carregando conteúdo ... </div>}

        {!loading && (
          <>
            <div className="login-banner"></div>
            <div className="divlogin1">
              <Link className="logo" to="/">
                <img src="/HowtoBrazil-reto.svg" alt="" />
              </Link>
              <div className="titulo">
                <div className="titulo-primario">
                  <p className="acesso">
                    <strong>Acesso</strong>
                  </p>
                  <p className="acesso1">
                    Insira seu e-mail e senha para fazer login.{" "}
                  </p>
                </div>
              </div>
              <div className="form-login">
                <div className="div-form">
                  <input
                    className="input"
                    type="email"
                    placeholder="email@email.com.br"
                    value={email}
                    onChange={handleInputEmail}
                  />
                </div>
                <div className="div-form">
                  <input
                    className="input"
                    type="text"
                    placeholder="Primeiro nome"
                    value={nome}
                    onChange={handleInputnome}
                  />
                </div>
                <div className="div-form">
                  <input
                    className="input"
                    type="text"
                    placeholder="Último nome"
                    value={ultimoNome}
                    onChange={handleInputultimoNome}
                  />
                </div>
                <div className="div-form">
                  <input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={handleInputSenha}
                  />
                </div>
                <div className="div-form">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirmação de senha"
                    value={confirmarSenha}
                    onChange={handleInputConfirmarSenha}
                  />
                </div>
                <div className="select">
                  <select value={statusMigratorio} onChange={handleMigratorio}>
                    <option disabled value="">
                      Status Migratório
                    </option>
                    <option value="Turista">Turista</option>
                    <option value="Estudante">Estudante</option>
                    <option value="Refugiado">Refugiado</option>
                    <option value="Asilado">Asilado</option>
                    <option value="Trabalhador Temporrário">
                      Trabalhador Temporário
                    </option>
                    <option value="Residente Permanente">
                      Residente Permanente
                    </option>
                  </select>
                </div>
                <div className="checkbox-wrapper">
            <input
              className="checkbox"
              type="checkbox"
              name="Trabalho"
              onChange={handleInputInteresses}
            />

            <label> Saúde </label>
            <input
              className="checkbox"
              type="checkbox"
              name="Refugiado"
              onChange={handleInputInteresses}
            />

            <label> Trabalho </label>
            <input
              className="checkbox"
              type="checkbox"
              name="Educação"
              onChange={handleInputInteresses}
            />
            <label> Apoio Comunitário </label>

            <input
              className="checkbox"
              type="checkbox"
              name="Casa"
              onChange={handleInputInteresses}
            />
            <label> Educação </label>

            <input
              className="checkbox"
              type="checkbox"
              name="Documentação"
              onChange={handleInputInteresses}
            />
            <label> Casa </label>
            <input
              className="checkbox"
              type="checkbox"
              name="Documentação"
              onChange={handleInputInteresses}
            />
            <label> Documentação </label>
          </div>

                <div>
                  <button className="entrar" onClick={handleCadastro}>
                    Entrar
                  </button>
                </div>

                <div className="cadastre-se">
            <p>Já tem conta?</p>
            <Link to="/Login">Login</Link>
          
        </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Cadastro;
