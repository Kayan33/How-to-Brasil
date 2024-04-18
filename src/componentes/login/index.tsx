import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { api } from "../../api";
import { typeLogin } from "../../types/login";

function LogiN() {
  const [senha, Setsenha] = useState("");
  const [email, SetEmail] = useState("");
  const [login, setLogin] = useState<typeLogin[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  function handleInputSenha(event: React.ChangeEvent<HTMLInputElement>) {
    Setsenha(event.target.value);
  }

  function handleInputEmail(event: React.ChangeEvent<HTMLInputElement>) {
    SetEmail(event.target.value);
  }

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

  const handleLogin = async (email: string, senha: string) => {
    setLoading(true);
    let json = await api.fazerLogin(email, senha);

    if (json.return) {
      setLoading(false);
      alert("Login realizado com sucesso!");
      setLogin((login) => [...login, json]);
      UsuarioLogadoCtx?.setNmae(email);
      UsuarioLogadoCtx?.setNome(json.return[0].nome);
      UsuarioLogadoCtx?.setUltimoNome(json.return[0].ultimoNome);

      navigate("/Usuario");
    } else {
      setLoading(false);
      alert(json.message);
    }
    console.log(json);
  };

  const handleButtonClicked = () => {
    handleLogin(email, senha);
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
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={handleInputSenha}
                  />
                </div>
                <div className="esqueci-senha">
                  <Link className="link-esqueci-senha" to="/EsqueciSenha">
                    Esqueci minha senha
                  </Link>
                </div>
                <div>
                  <button className="entrar" onClick={handleButtonClicked}>
                    Entrar
                  </button>
                </div>

                <div className="cadastre-se">
                  <p>Não é cadastrado? </p>
                  <Link to="/Cadastrar">Cadastre-se</Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default LogiN;
