import "../../style/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header-introdução">
        <Link className="logo" to="">
          How to <br />
          Brasil
        </Link>
        <ul className="header-link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Cursos</a>
          </li>
          <li className="instrutore">
            <a href="/">Instrutore</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li className="comece">
            <a href="/">COMECE JÁ!</a>
          </li>
        </ul>
      </nav>
      <div className="header-texto">
        <h1>Toda a praticidade de informações na sua tela. </h1>
      </div>
    </header>
  );
}

export default Header;
