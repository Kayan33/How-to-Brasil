
import { useContext } from "react";
import Menu from "../componentes/menu";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import "../style/usuario.css";
import DuvidasSaude from "../componentes/duvidas/duviadassaude";

function PgDuvidasSaude() {

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
        <DuvidasSaude/>
      </div>
      </>
      }
      

    </div>
  );
}

export default PgDuvidasSaude;