
import { useContext } from "react";
import DmSaude from "../componentes/dmsaude";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Adminsaude() {
  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
  return (
    <div className="divusuario">
      { ( !UsuarioLogadoCtx?.name || UsuarioLogadoCtx?.name === null) &&
      <>
      <p>
        Usuario sem permissão
      </p>
      </>
      
      }
      <div>
        <Menu />
      </div>
      <div >
        <DmSaude/>
      </div>
      

    </div>
  );
}

export default Adminsaude;
