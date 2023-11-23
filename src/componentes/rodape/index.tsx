import "../../style/style.css";
import { Link } from "react-router-dom";

function Rodape() {
  return (
    <div className="rodape-bg">
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
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Inicio</a>
          </li>
        </ul>
      </nav>
      <Link className="saiba-mais" to="Cadastrar">
          SAIBA MAIS
        </Link>
    </div>
  );
}

export default Rodape;
