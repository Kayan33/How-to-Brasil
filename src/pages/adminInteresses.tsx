
import { useContext } from "react";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";
import DmInteresses from "../componentes/adminInteresses";

function AdminInteresses() {
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
        <DmInteresses/>
      </div>
      

    </div>
  );
}

export default AdminInteresses;
