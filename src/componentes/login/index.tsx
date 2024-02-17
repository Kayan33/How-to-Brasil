import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useContext } from 'react';
import {useState} from 'react';
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { api } from "../../api";
import { typeLogin} from "../../types/login";



function LogiN() {
const [senha, Setsenha] = useState('');
const [email, SetEmail] = useState('');
const [login, setLogin] = useState<typeLogin[]>([]);

const navigate = useNavigate ();


function handleInputSenha (event: React.ChangeEvent< HTMLInputElement >) {
  
  Setsenha(event.target.value);

}

function handleInputEmail (event: React.ChangeEvent< HTMLInputElement >) {

  SetEmail(event.target.value);
  
}

const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

const AcessoDireto = () => {
  UsuarioLogadoCtx?.setName(email);
  navigate('/Usuario');
}


const handleLogin = async (email: string, senha: string) => {
  let json = await api.fazerLogin(
    
    email,
    senha,
  );
  if (json.id) {
    alert("Login realizado com sucesso!");
    setLogin((login) => [...login, json]);
    navigate('/Usuario');
  } else {
    alert("Falha ao fazer login");
  }
  console.log(json);
};

const handleButtonClicked = () => {
  handleLogin(email, senha)
};
  return (
    <div className="divlogin">
      <div className="divlogin1">
        <Link className="logo" to="/">
          How to brasil
        </Link>

        <p className="acesso">
          
          <strong>Acesso</strong>
        </p>
        <p className="acesso1">Insira seu e-mail e senha para fazer login. </p>

        <input type="email" placeholder="email@email.com.br"  value={email} onChange={handleInputEmail} />

        <input type="password" placeholder="Senha" value={senha} onChange={handleInputSenha} />

        <div className="conectado_esqueci">
          <input type="checkbox" />
          <label>Mantenha-me conectado</label>
          <Link to="/EsqueciSenha">Esqueci minha senha</Link>
        </div>

        <button className="entrar" onClick={ handleButtonClicked }>
          Entrar
        </button>

        <div className="cadastre-se">
          <p>Não é cadastrado? </p>
          <Link to="/Cadastrar">Cadastre-se</Link>
        </div>
        

    
      </div>
    </div>
  );
}
export default LogiN;