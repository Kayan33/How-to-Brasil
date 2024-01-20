import Interesses from "../componentes/interesses";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Usuario() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Interesses/>
      </div>
      

    </div>
  );
}

export default Usuario;
