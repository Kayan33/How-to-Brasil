import "../../style/stylelogin.css";
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
  const [selectedOption, setSelectedOption] = useState('');


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

function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
  setSelectedOption(event.target.value);
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
<div className="select">
        <select value={selectedOption} onChange={handleSelectChange}  >
          <option value="" disabled>Status Migratório</option>
          <option value="option1">Turista</option>
          <option value="option2">Estudante</option>
          <option value="option2">Refugiado</option>
          <option value="option2">Asilado</option>
          <option value="option2">Trabalhador Temporrário</option>
          <option value="option2">Residente Permanente</option>
          
        </select>

        <select value={selectedOption} onChange={handleSelectChange} multiple >
          <option value="" disabled>Status Migratório</option>
          <option value="option1">Turista</option>
          <option value="option2">Estudante</option>
          <option value="option2">Refugiado</option>
          <option value="option2">Asilado</option>
          <option value="option2">Trabalhador Temporrário</option>
          <option value="option2">Residente Permanente</option>
          
        </select>
</div>

        <Link className="entrar" to="/Cadastrar">
          Entrar
        </Link>
        <div className="cadastre-se">
          <p>Já tem conta? Faça seu </p>
          <Link to="/Login">login.</Link>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;