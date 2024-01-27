import { Link } from "react-router-dom";
import "../../style/interesse.css";

function Trabalho() {
    return (
        <div className="interesse-container">
        <h1>TRABALHO</h1>
        <div className="interesse-bg">
          <div className="interesse-img">
            
  
            <h3>UBS Bela Vista</h3>
            <h3>Endereço</h3>
            <h3>Telefone</h3>
            <h3>Horário de funcionamento:</h3>
            <hr />
            <Link className="saiba-mais" to="">
              VER MAIS
            </Link>
          </div>
  
          <div className="interesse-img">
            <img src="/slider/Slider1.png" alt="" />
  
            <h3>SAÚDE</h3>
            <p>
              Conecte-se com a comunidade local e outros imigrantes, seja através
              de grupos online, eventos locais ou instituições de apoio a
              imigrantes.
            </p>
            <hr />
            <Link className="saiba-mais" to="">
              VER MAIS
            </Link>
          </div>
  
          <div className="interesse-img">
            <img src="/slider/Slider1.png" alt="" />
  
            <h3>SAÚDE</h3>
            <p>
              Conecte-se com a comunidade local e outros imigrantes, seja através
              de grupos online, eventos locais ou instituições de apoio a
              imigrantes.
            </p>
            <hr />
            <Link className="saiba-mais" to="">
              VER MAIS
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Trabalho;