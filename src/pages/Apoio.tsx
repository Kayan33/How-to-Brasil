

import { useContext } from "react";
import Apoio from "../componentes/apoio";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Pgeapoio() {
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
        <Apoio/>
      </div>
      </>
      }
      

    </div>
  );
}

export default Pgeapoio;
