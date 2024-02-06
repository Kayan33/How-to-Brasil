import Interesses from "../componentes/interesses";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Usuario() {
  return (
    <div className="divusuario">
      <div className="usuario-menu">
        <Menu />
      </div>
      <div className="usuario-interesses" >
        <Interesses/>
      </div>
      

    </div>
  );
}

export default Usuario;
