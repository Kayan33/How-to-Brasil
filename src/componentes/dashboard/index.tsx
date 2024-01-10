import "../../style/usuario.css";

function Dashboard() {
  return (
    <div className="container-Dashboard">
      <div className="bg-Dashboard">
        <div className="perfl">

        <img src="perfil.svg" alt="" />
        </div>

        <div className="imagem-svg">
          <img src="/dashboard/computador.svg" alt="" />
          <img src="/dashboard/trabalho.svg" alt="" />
          <img src="/dashboard/educacao.svg" alt="" />
          <img src="/dashboard/documentacao.svg" alt="" />
          <img src="/dashboard/casa.svg" alt="" />
          <img src="/dashboard/apoio.svg" alt="" />
          <img src="/dashboard/saude.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
