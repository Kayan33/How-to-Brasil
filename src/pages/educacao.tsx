
import { useContext } from "react";
import Educacao from "../componentes/educacao";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Pgeducacao() {

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
        <Educacao/>
      </div>
      </>
      }
      

    </div>
  );
}

export default Pgeducacao;
