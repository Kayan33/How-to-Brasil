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

    if (json.status) {
      alert("Login realizado com sucesso!");
      setTrocaSenha((login) => [...login, json]);
      UsuarioLogadoCtx?.setName(email);
      navigate("/Usuario");
    } else {
      alert(json.message);
    }
    console.log(json);
  };
  
  const handleButtonClicked = () => {
    handTrocaSenha(email, senha)
  };
  return (
    <div className="divlogin">
      <div className="divlogin1">
        <Link className="logo" to="/">
          How to brasil
        </Link>

        <p className="acesso">
          <strong>Esqueceu a senha?</strong>
        </p>
        <p className="acesso1">
          Informe seu email cadastrado para localizar e redefinir sua senha.{" "}
        </p>

        <input
          type="email"
          placeholder="email@email.com.br"
          value={email}
          onChange={handleInputEmail}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={handleInputSenha}
        />
        <br />

        <button className="entrar" onClick={handleButtonClicked}>
          Entrar
        </button>

        <br />

        <div className="cadastre-se">
          <p> Retornar para </p>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default EsqueciSenha;
