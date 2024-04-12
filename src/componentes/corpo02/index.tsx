import { gsap, } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import "../../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBriefcase, faHeartPulse, faHouse, faUserGraduate, faUsers } from "@fortawesome/free-solid-svg-icons";

function Corpo02() {
  
  const el = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(()=>{
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".guia-tudo",
          scrub:true,
          
          start:"top 900px",
          end:"bottom 600px"
        }
      })
      .fromTo("#model-1",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })

      .fromTo("#model-2",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })

      .fromTo("#model-3",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })
      .fromTo("#model-4",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })
      .fromTo("#model-5",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })
      .fromTo("#model-6",{
        opacity:0,
        y:160,
      },{
        opacity:1,
        y:0
      })
    },el)
    


    return () =>{
      gsap.killTweensOf(".guia-tudo")
    }
  }, [])
  return (
    <div className="guia-bg" id="Guia">
      <h1>O guia para você que está chegando no Brasil</h1>
      <div className="guia" ref={el} >
        <div className="guia-tudo" id="model-1">
          <div className="guia-img">
            <FontAwesomeIcon icon={faBook} size="2x"/>
          </div>
          <h3>Documentação</h3>
          <p>
          Simplificamos o processo burocrático, fornecendo orientações detalhadas sobre obtenção de vistos, 
          registro civil, CPF (Cadastro de Pessoas Físicas), carteira de motorista e outros documentos essenciais para viver 
          legalmente no Brasil.
          </p>
        </div>

        <div className="guia-tudo" id="model-2">
          <div className="guia-img">
          <FontAwesomeIcon icon={faHouse} size="2x"/>
          </div>
          <h3>Moradia</h3>
          <p>
          Descubra dicas práticas para encontrar moradia no Brasil, desde aluguel até compra de imóveis. Oferecemos orientações sobre os 
          diferentes tipos de moradia disponíveis e áreas acessíveis.
          </p>
        </div>

        <div className="guia-tudo" id="model-3">
          <div className="guia-img">
          <FontAwesomeIcon icon={faBriefcase} size="2x"/>
          </div>
          <h3>Trabalho</h3>
          <p>
          Navegue pelo mercado de trabalho brasileiro com confiança. Oferecemos orientações sobre vagas de emprego
          e requesitos pedidos para cada uma.
          </p>
        </div>

        <div className="guia-tudo" id="model-4"  >
          <div className="guia-img">
          <FontAwesomeIcon icon={faHeartPulse} beat size="2x"/>
          </div>
          <h3>Saúde</h3>
          <p>
          Explore informações sobre o sistema de saúde brasileiro, incluindo como acessar serviços médicos, 
          encontrar hospitais e clínicas de confiança.
          </p>
        </div>

        <div className="guia-tudo" id="model-5">
          <div className="guia-img">
          <FontAwesomeIcon icon={faUsers} size="2x"/>
          </div>
          <h3>Apoio Comunitário</h3>
          <p>
          Conecte-se com outras pessoas que compartilham sua experiência de imigração. Descubra grupos de apoio locais, 
          eventos comunitários e recursos para ajudá-lo a se integrar à comunidade e construir uma rede de suporte sólida.
          </p>
        </div>

        <div className="guia-tudo" id="model-6">
          <div className="guia-img">
          <FontAwesomeIcon icon={faUserGraduate} size="2x"/>
          </div>
          <h3>Educação</h3>
          <p>
          Invista no seu desenvolvimento educacional. Explore opções de escolas, universidades e cursos de idiomas, 
          além de programas de educação continuada e certificações que podem impulsionar sua carreira e abrir novas oportunidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Corpo02;
