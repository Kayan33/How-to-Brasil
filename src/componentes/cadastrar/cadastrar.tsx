import "../../style/stylelogin.css";
import "../../style/stylecadastro.css";
import "../../style/style.css";

import { Link, } from "react-router-dom";
import React from 'react';
import {useState} from 'react';



function Cadastro() {
  const [email, SetEmail] = useState('');
  const [primeironome, SetPrimeiroNome] = useState('');
  const [ultimonome, SetUltimoNome] = useState('');
  const [senha, SetSenha] = useState('');
  const [confirmacaosenha, SetConfirmacaoSenha] = useState('');


function handleInputEmail (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetEmail(event.target.value);

}
  
function handleInputPrimeiroNome (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetPrimeiroNome(event.target.value);

}

function handleInputUltimoNome (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetUltimoNome(event.target.value);

}
  

function handleInputSenha (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetSenha(event.target.value);
  
}

function handleInputConfirmacaoSenha (event: React.ChangeEvent< HTMLInputElement >) {
  
  SetConfirmacaoSenha(event.target.value);
  
}


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

        <input type="email" placeholder="email@email.com.br" value={email} onChange={handleInputEmail} />
        <input type="text" placeholder="Primeiro nome" value={primeironome} onChange={handleInputPrimeiroNome} />
        <input type="text" placeholder="Último nome" value={ultimonome} onChange={handleInputUltimoNome} />

        <input type="password" placeholder="Senha" value={senha} onChange={handleInputSenha} />

        <input type="password" placeholder="Confirmação de senha" value={confirmacaosenha} onChange={handleInputConfirmacaoSenha}/>


        <Link className="entrar" to="/Cadastrar">
          Entrar
        </Link>
        <div className="cadastre-se">
          <p>Já tem conta? Faça seu </p>
          <Link to="/Login">login.</Link>
        </div>
        <div className="ou">
          <hr />  <p>ou</p>   <hr />
        </div>
        <div className="entrar-google">
        <a id="google" href="">Entrar com google</a>
        <br />
        <a id="facebook" href="">Entrar com facebook</a>
        </div>

        
      </div>
    </div>
  );
}
export default Cadastro;
