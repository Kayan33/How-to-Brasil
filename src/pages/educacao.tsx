
import Educacao from "../componentes/educacao";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Pgeducacao() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Educacao/>
      </div>
      

    </div>
  );
}

export default Pgeducacao;
