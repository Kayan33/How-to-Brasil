import "../../style/stylelogin.css";
import "../../style/stylecadastro.css";
import "../../style/style.css";

import { Link, } from "react-router-dom";




function Cadastro() {
  
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

        <input type="email" placeholder="email@email.com.br" />
        <input type="text" placeholder="Primeiro nome" />
        <input type="text" placeholder="Último nome" />

        <input type="password" placeholder="Senha" />

        <input type="password" placeholder="Confirmação de senha" />


        <Link className="entrar" to="/Cadastrar">
          Entrar
        </Link>

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
