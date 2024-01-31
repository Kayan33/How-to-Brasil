
import Documentacao from "../componentes/documentacao";
import Menu from "../componentes/menu";
import "../style/usuario.css";

function Pgedocumentacao() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Documentacao/>
      </div>
      

    </div>
  );
}

export default Pgedocumentacao;
