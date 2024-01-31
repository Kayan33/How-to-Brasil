

import Apoio from "../componentes/apoio";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Pgeapoio() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Apoio/>
      </div>
      

    </div>
  );
}

export default Pgeapoio;
