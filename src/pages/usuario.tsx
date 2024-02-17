import { useContext } from "react";
import Interesses from "../componentes/interesses";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Usuario() {
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
      <div className="usuario-menu">
        <Menu />
      </div>
      <div className="usuario-interesses" >
        <Interesses/>
      </div>
        
        </>
}
      

    </div>
  );
}

export default Usuario;
