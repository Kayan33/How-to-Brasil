import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import React from 'react';



function EsqueciSenha() {
const [email, SetEmail] = useState('');

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
          
          <strong>Esqueceu a senha?</strong>
        </p>
        <p className="acesso1">Informe seu email cadastrado para receber instruções de redefinição de senha. </p>

        <input type="email" placeholder="email@email.com.br"  value={email} onChange={handleInputEmail} />

            <br/>

        <Link className="entrar" to="/Cadastrar">
          Entrar
        </Link>

            <br/>

        <div className="ou">
          <hr />  <p>ou</p>   <hr />
        </div>

        

        <div className="cadastre-se">
          <p> Retorne para </p>
          <Link to="/Login">Login</Link>
        </div>

      </div>
    </div>
  );
}
export default EsqueciSenha;
