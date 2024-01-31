
import Menu from "../componentes/menu";
import Saude from "../componentes/saude";
import "../style/usuario.css";

function Pgsaude() {
  return (
    <div className="divusuario">
      <div>
        <Menu />
      </div>
      <div >
        <Saude/>
      </div>
      

    </div>
  );
}

export default Pgsaude;
