
import Menu from "../componentes/menu";
import Trabalho from "../componentes/trabalho";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import { useContext } from "react";
import "../style/usuario.css";

function Pgtrabalho() {

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
      <div className="usuario-interesses" >
        <Trabalho/>
      </div>
      
      </>}
      

    </div>
  );
}

export default Pgtrabalho;
