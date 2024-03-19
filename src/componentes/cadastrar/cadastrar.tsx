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
  const [statusMigratorio, setstatusMigratorio] = useState<string[]>([]);
  const [interesses, setinteresses] = useState<string[]>([]);

  const [cadastro, setCadastro] = useState<typeCadastro[]>([]);

  const navigate = useNavigate();


  
  const handleInputStatusMigratorio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
        // Se marcado, adiciona à lista
        setstatusMigratorio((prevStatusMigratorio) => [...prevStatusMigratorio, name]);
    } else {
        // Se desmarcado, remove da lista
        setstatusMigratorio((prevMigratorio) => prevMigratorio.filter((item) => item !== name));
    }
}



  
const handleInputInteresses = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, checked } = event.target;

  if (checked) {
      // Se marcado, adiciona à lista
      setinteresses((prevInteresses) => [...prevInteresses, name]);
  } else {
      // Se desmarcado, remove da lista
      setinteresses((prevInteresses) => prevInteresses.filter((item) => item !== name));
  }
}


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

    if (json.status =  200) {
      alert("Cadastro feito com sucesso!");
      setCadastro((cadastro) => [...cadastro, json]);
      navigate("/Login");
    } else {
      alert(json.message);
    }
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
          value={confirmarSenha}
          onChange={handleInputConfirmarSenha}
        />

        <div className="select">
          
              Status Migratório

              <input className='checkbox' type="checkbox" name='Turista' onChange={handleInputStatusMigratorio} />
                <label> Turista </label>
           
              <input className='checkbox' type="checkbox" name='Estudante' onChange={handleInputStatusMigratorio} />
                <label> Estudante </label>
            
              <input className='checkbox' type="checkbox" name='Refugiado' onChange={handleInputStatusMigratorio} />
                <label> Refugiado </label>

              <input className='checkbox' type="checkbox" name='Asilado' onChange={handleInputStatusMigratorio} />
                <label> Asilado </label>

              <input className='checkbox' type="checkbox" name='Trabalhador Temporario' onChange={handleInputStatusMigratorio} />
                <label> Trabalhador Temporário </label>

              <input className='checkbox' type="checkbox" name='Residente Permanente' onChange={handleInputStatusMigratorio} />
                <label> Residente Permanente </label>
          

          
              Interesses
            
              <input className='checkbox' type="checkbox" name='Saúde' onChange={handleInputInteresses} />
                <label> Saúde </label>

              <input className='checkbox' type="checkbox" name='Trabalho' onChange={handleInputInteresses} />
                <label> Trabalho </label>

              <input className='checkbox' type="checkbox" name='Refugiado' onChange={handleInputInteresses} />
                <label> Apoio Comunitário </label>

              <input className='checkbox' type="checkbox" name='Educação' onChange={handleInputInteresses} />
                <label> Educação </label>

              <input className='checkbox' type="checkbox" name='Casa' onChange={handleInputInteresses} />
                <label> Casa </label>

              <input className='checkbox' type="checkbox" name='Documentação' onChange={handleInputInteresses} />
                <label> Documentação </label>
        
        </div>

        <button className="entrar" onClick={handleCadastro}>
          Cadastrar
        </button>
        <div className="cadastre-se">
          <p>Já tem conta? Faça seu Login</p>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
