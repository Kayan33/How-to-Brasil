
import { useContext } from "react";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";
import DuvidasApio from "../componentes/duvidas/duvidasapoio";

function PgDuvidasApoio
() {

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
      {UsuarioLogadoCtx?.name &&
      <>
      <div>
        <Menu />
      </div>
      <div >
        <DuvidasApio/>
      </div>
      </>
      }
      

    </div>
  );
}

export default PgDuvidasApoio
;