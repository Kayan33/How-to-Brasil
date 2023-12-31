import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';
import {useState} from 'react';


function LogiN() {
const [password, SetPassword] = useState('');
const [email, SetEmail] = useState('');


function handleInputPassword (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetPassword(event.target.value);

}

function handleInputEmail (event: React.ChangeEvent< HTMLInputElement >) {

  SetEmail(event.target.value);
  
}




  const navigate = useNavigate();
  const params = useParams();
  function handleClick() {
    navigate("/Cadastrar");
  }
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

        <input type="password" placeholder="Senha" value={password} onChange={handleInputPassword} />

        <div className="conectado_esqueci">
          <input type="checkbox" />
          <label>Mantenha-me conectado</label>
          <Link to="/EsqueciSenha">Esqueci minha senha</Link>
        </div>

        <Link className="entrar" to="/Bem-Vindo">
          Entrar
        </Link>

        <div className="cadastre-se">
          <p>Não é cadastrado? </p>
          <Link to="/Cadastrar">Cadastre-se</Link>
        </div>
        <div className="ou">
          <hr />  <p>ou</p>   <hr />
        </div>
        <div className="entrar-google">
        <a id="google" href="">Entrar com google</a>
        <br />
        <a id="facebook" href="">Entrar com facebook</a>
        </div>

        {/* {Propriedades.titulo} */}

        {/* <button onClick={handleClick}> Voltar </button> */}
      </div>
    </div>
  );
}
export default LogiN;
