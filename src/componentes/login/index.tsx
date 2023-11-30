import "../../style/stylelogin.css";
import "../../style/style.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  titulo: string;
};

function LogiN(Propriedades: Props) {
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

        <input type="email" placeholder="email@email.com.br" />

        <input type="password" placeholder="Senha" />

        <div className="conectado_esqueci">
          <input type="checkbox" />
          <label>Mantenha-me conectado</label>
          <a href="">Esqueci minha senha</a>
        </div>

        <Link className="entrar" to="/Cadastrar">
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
