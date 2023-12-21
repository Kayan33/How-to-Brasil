import "../../style/Bemvindo.css";
import { Link } from "react-router-dom";

function BemVindo() {
  return (
    <div className="container">
      <div className="container-bg">
        <div className="teste">
          <img src="/mapa-mundo-brasil.svg" alt="" />
          <div className="texto">
            <h1>Bem vindo, Kayan</h1>
            <p>
              Chegou o momento de iniciar sua jornada de adaptação legal no
              Brasil, com a nossa aplicação web exclusiva para imigrantes
              recém-chegados! Vamos personalizar suas configurações para
              garantir uma experiência única e eficiente.
            </p>
            <button className="saiba-mais">VAMOS LÁ!</button>
          </div>
        </div>
        <div className="container-bolinha">
          <div className="bolinha-colorida"></div>
          <div className="bolinha"></div>
          <div className="bolinha"></div>
          <div className="bolinha"></div>
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
