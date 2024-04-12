import "../../style/style.css";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="sobre-bg" id="Sobre">
      <div className="sobre">
        <h1>Sobre <img src="/HowtoBrazil-reto.svg" alt="" /></h1>
        <p>
        No <strong>HowToBrasil</strong>, acreditamos que informação é poder. Estamos comprometidos em capacitá-lo com os conhecimentos e recursos necessários para prosperar no Brasil.

Prepare-se para uma jornada emocionante e gratificante. Estamos aqui para ajudá-lo em cada passo do caminho.
<br /><br />
Bem-vindo à sua nova casa no Brasil. Bem-vindo ao <strong>HowToBrasil.</strong>
        </p>
        <div className="saiba-mais-bg">
        <Link className="saiba-mais" to="Cadastrar">
          SAIBA MAIS
        </Link>
        </div>
      </div>

      <div className="sobre-img">
        <img src="brasil.png" alt="" />
      </div>
    </div>
  );
}

export default Sobre;
