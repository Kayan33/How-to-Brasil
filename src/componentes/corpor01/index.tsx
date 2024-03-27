import "../../style/style.css";
import { Link } from "react-router-dom";

function Corpo01() {
  return (
    <section className="informacao-bg" id="Inicio">
      <div className="informacao">
        <h1>
          Toda a <span>praticidade</span> de <span>informações</span> na sua
          tela
        </h1>
        <p>
        Bem-vindo ao HowToBrasil!

Navegar por um novo país pode ser desafiador, mas não precisa ser uma jornada solitária. No HowToBrasil, estamos aqui para tornar sua transição para o Brasil mais suave, mais informada e mais empoderada do que nunca. <br />

Imagine ter todas as informações necessárias para iniciar sua nova vida no Brasil ao alcance de um clique. Aqui, você encontrará um guia abrangente e confiável para ajudá-lo em pontos cruciais nesta nova jornada. <br />

        </p>
        
        <Link className="saiba-mais" to="Cadastrar">
          SAIBA MAIS
        </Link>
      </div>
    </section>
  );
}

export default Corpo01;
