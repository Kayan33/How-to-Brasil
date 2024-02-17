
import { useContext } from "react";
import Documentacao from "../componentes/documentacao";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";

function Pgedocumentacao() {

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
        <Documentacao/>
      </div>
</>}

      

    </div>
  );
}

export default Pgedocumentacao;
