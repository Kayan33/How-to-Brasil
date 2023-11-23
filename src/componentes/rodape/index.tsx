import "../../style/style.css";
import { Link } from "react-router-dom";

function Rodape() {
  return (
    <div className="rodape-bg">
      <div className="rodape-introducao">
        <a className="logo" href="/">
          How to <br />
          Brasil
        </a>
        <nav>
          <ul className="rodape-link">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Quem somos</a>
            </li>
            <li>
              <a href="/">Recursos</a>
            </li>
            <li className="blog">
              <a href="/">Blog</a>
            </li>
          </ul>
        </nav>
        <Link className="saiba-mais" to="Cadastrar">
          Comece gratuitamente!
        </Link>

      </div>
        <div className="rodape-baixo">
          <p>©2023 Tecnologia Ltda. CNPJ 00.000.000/0000-00</p>
        </div>
    </div>
  );
}

export default Rodape;
