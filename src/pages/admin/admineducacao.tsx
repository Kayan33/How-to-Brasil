
import { useContext } from "react";
import Menu from "../../componentes/menu";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import "../../style/usuario.css";
import DnEducacao from "../../admin/admineducacao";

function AdminEducacao() {
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
        <DnEducacao/>
      </div>
      

    </div>
  );
}

export default AdminEducacao;
