import "../../style/style.css";

function Corpo04() {
  return (
    <div className="sobre-bg">
      <div className="sobre">
        <h1>Sobre <span>HOW TO BRASIL</span></h1>
        <p>
          A é focada auxiliar imigrantes recém-chegados no Brasil a se adaptarem
          legalmente e a identificar pontos públicos essenciais em suas
          localizações. O nosso objetivo é fornecer informações cruciais para
          quem está chegando no Brazil como, documentos necessários, direitos e
          deveres, serviços de saúde, educação, transporte e outras informações
          úteis para facilitar a integração dos imigrantes.
        </p>
        <div className="saiba-mais-bg">
        <a className="saiba-mais" href="/">SAIBA MAIS</a>
        </div>
      </div>

      <div className="sobre-img">
        <img src="brasil.png" alt="" />
      </div>
    </div>
  );
}

export default Corpo04;
