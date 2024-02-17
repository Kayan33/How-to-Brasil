
import { useContext } from "react";
import Menu from "../componentes/menu";
import Saude from "../componentes/saude";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Pgsaude() {
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
        <Saude/>
      </div>
      

    </div>
  );
}

export default Pgsaude;
