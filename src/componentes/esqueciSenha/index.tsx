import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import React from "react";
import { api } from "../../api";
import { typeLogin } from "../../types/login";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function EsqueciSenha() {
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const [trocaSenha, setTrocaSenha] = useState<typeLogin[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleInputEmail(event: React.ChangeEvent<HTMLInputElement>) {
    SetEmail(event.target.value);
  }
  function handleInputSenha(event: React.ChangeEvent<HTMLInputElement>) {
    SetSenha(event.target.value);
  }

  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

  const handTrocaSenha = async (email: string, senha: string) => {
    let json = await api.TrocaSenha(
      email,
       senha
       );

    if (json.status = 200) {
      setLoading(false)
      alert("Login realizado com sucesso!");
      setTrocaSenha((login) => [...login, json]);
      UsuarioLogadoCtx?.setNmae(email);
      navigate("/Usuario");
    } else {
      setLoading(false)
      alert(json.message);
    }
    console.log(json);
  };
  
  const handleButtonClicked = () => {
    handTrocaSenha(email, senha)
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
                    <strong>Esqueceu a senha</strong>
                  </p>
                  <p className="acesso1">
                  Informe seu email cadastrado para localizar e redefinir sua senha.
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
                
                <div>
                  <button className="entrar" onClick={handleButtonClicked}>
                    Entrar
                  </button>
                </div>

                <div className="cadastre-se">
          <p> Retornar para</p>
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
export default EsqueciSenha;
