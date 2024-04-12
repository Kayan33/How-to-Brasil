import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import {useState} from 'react';
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { api } from "../../api";
import { typeLogin} from "../../types/login";



function LogiN() {

const [senha, Setsenha] = useState('');
const [email, SetEmail] = useState('');
const [login, setLogin] = useState<typeLogin[]>([]);
const [loading, setLoading] = useState(false);

const navigate = useNavigate ();

useEffect(() => {} , []);


function handleInputSenha (event: React.ChangeEvent< HTMLInputElement >) {
  
  Setsenha(event.target.value);

}

function handleInputEmail (event: React.ChangeEvent< HTMLInputElement >) {

  SetEmail(event.target.value);
  
}

const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);


const handleLogin = async (email: string, senha: string) => {
  setLoading(true);
  let json = await api.fazerLogin(    
    email,
    senha,
  );
  
  if (json.return [1]) {
    setLoading(false);
    alert("Login realizado com sucesso!");
    setLogin((login) => [...login, json]);
    UsuarioLogadoCtx?. setName (email);
    navigate('/Usuario');
  } else {
    setLoading(false);
    alert(json.message);
  }
  console.log(json);
  
};

const handleButtonClicked = () => {
  handleLogin(email, senha)
};
  return (

    <div className="divlogin">


      {loading && 
        <div> Carregando conteúdo ... </div>
      }

      
    {!loading && 
     
      <div className="divlogin1">
        <Link className="logo" to="/">
        <img src="/HowtoBrazil-reto.svg" alt="" />
        </Link>

        <p className="acesso">
          
          <strong>Acesso</strong>
        </p>
        <p className="acesso1">Insira seu e-mail e senha para fazer login. </p>

        <input type="email" placeholder="email@email.com.br"  value={email} onChange={handleInputEmail} />

        <input type="password" placeholder="Senha" value={senha} onChange={handleInputSenha} />


        <button className="entrar" onClick={ handleButtonClicked }>
          Entrar
        </button>

        <div className="cadastre-se">
          <p>Não é cadastrado? </p>
          <Link to="/Cadastrar">Cadastre-se</Link>
        </div>
        
        <div className="conectado_esqueci">
          
          <Link to="/EsqueciSenha">Esqueci minha senha</Link>
        </div>

    
      </div>
    }
    
    

    </div>
  );
}
export default LogiN;