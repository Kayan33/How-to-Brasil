

import { useContext } from "react";
import Casa from "../componentes/casa";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Pgecasa() {
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
        <Casa/>
      </div>
      </>
      }
      

    </div>
  );
}

export default Pgecasa;
