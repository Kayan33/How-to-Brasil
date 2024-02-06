
import Menu from "../componentes/menu";
import Trabalho from "../componentes/trabalho";
import "../style/usuario.css";

function Pgtrabalho() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div className="usuario-interesses" >
        <Trabalho/>
      </div>
      

    </div>
  );
}

export default Pgtrabalho;
