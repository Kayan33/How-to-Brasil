import "../../style/style.css";
import { Link } from "react-router-dom";

function Corpo01() {
  return (
    <section className="informacao-bg">
      <div className="informacao">
        <h1>
          Toda a <span>praticidade</span> de <span>informações</span> na sua
          tela
        </h1>
        <p>
          A HOW TOW BRAZIL é focada auxiliar imigrantes recém-chegados no Brasil
          a se adaptarem legalmente e a identificar pontos públicos essenciais
          em suas localizações. O nosso objetivo é fornecer informações cruciais
          para quem está chegando no Brazil como, documentos necessários,
          direitos e deveres, serviços de saúde, educação, transporte e outras
          informações úteis para facilitar a integração dos imigrantes.
        </p>
        
        <Link className="saiba-mais" to="Cadastrar">
          SAIBA MAIS
        </Link>
      </div>
    </section>
  );
}

export default Corpo01;
