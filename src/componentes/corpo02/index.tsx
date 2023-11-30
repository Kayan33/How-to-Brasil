import { gsap, } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import "../../style/style.css";

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
          
          start:"top 1000px",
          end:"bottom 250px"
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
    <div className="guia-bg">
      <h1>O guia para voçê que está chegado no Brasil</h1>
      <div className="guia" ref={el} >
        <div className="guia-tudo" id="model-1">
          <div className="guia-img">
            <img src="/documentacao.svg" alt="" />
          </div>
          <h3>Documentação e Regularização</h3>
          <p>
            Você deve ter todos os documentos necessários para entrar e
            permanecer no Brasil legalmente. Isso inclui vistos, autorizações de
            trabalho e qualquer outra documentação relevante.
          </p>
        </div>

        <div className="guia-tudo" id="model-2">
          <div className="guia-img">
            <img src="/casa.svg" alt="" />
          </div>
          <h3>Moradia e Meios de Transporte</h3>
          <p>
            Procure um lugar para morar, considerando a proximidade do local de
            trabalho, escolas (se tiver filhos) e serviços essenciais. Entenda
            também as opções de transporte público e privado na região.
          </p>
        </div>

        <div className="guia-tudo" id="model-3">
          <div className="guia-img">
            <img src="/trabalho.svg" alt="" />
          </div>
          <h3>Buscar Emprego ou Educação</h3>
          <p>
            Se você ainda não tiver emprego, comece a procurar oportunidades que
            se alinhem com suas habilidades e interesses.
          </p>
        </div>

        <div className="guia-tudo" id="model-4">
          <div className="guia-img">
            <img src="/saude.svg" alt="" />
          </div>
          <h3>Saúde</h3>
          <p>
            Familiarize-se com o sistema de saúde local e comprove-se de ter um
            plano de saúde adequado. Faça exames médicos regulares e mantenha-se
            informado sobre os serviços médicos disponíveis em sua área.
          </p>
        </div>

        <div className="guia-tudo" id="model-5">
          <div className="guia-img">
            <img src="/apoio.svg" alt="" />
          </div>
          <h3>Busque Apoio Comunitário</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
        </div>

        <div className="guia-tudo" id="model-6">
          <div className="guia-img">
            <img src="/educacao.svg" alt="" />
          </div>
          <h3>Educação</h3>
          <p>
            Se você tiver filhos em idade escolar, pesquise sobre as opções
            educacionais disponíveis e matriculas em uma escola.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Corpo02;
