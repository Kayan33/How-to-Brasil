import React, { useState } from "react";
import "../../style/style.css";

interface PerguntaResposta {
  id: number;
  pergunta: string;
  resposta: string;
}

const TEMPO_DE_ESPERA = 150; 

const Perguntas: React.FC = () => {
  const [perguntaExpandida, setPerguntaExpandida] = useState<number | null>(
    null
  );

  const perguntasRespostas: PerguntaResposta[] = [
    {
      id: 1,
      pergunta: "Preciso pagar para ter acesso a alguma funcionalidade do site?",
      resposta: "Não, nosso site possui foco total no auxílio, logo todas as nossas funções estão liberadas para acesso de forma gratuita, basta cadastrar-se para utilizar",
    },
    {
      id: 2,
      pergunta: "Como posso encontrar um médico ou hospital confiável no Brasil?",
      resposta: "Para encontrar um médico ou hospital confiável no Brasil, você pode começar pesquisando online, perguntando a amigos locais ou colegas de trabalho por recomendações. Além disso, você pode verificar se o médico ou hospital é credenciado pelo Conselho Regional de Medicina (CRM) e pela Agência Nacional de Saúde Suplementar (ANS), se for o caso. Ao visitar um médico ou hospital pela primeira vez, não hesite em fazer perguntas sobre suas credenciais, experiência e o processo de tratamento para garantir que você esteja confortável com seus cuidados de saúde.",
    },
    {
      id: 3,
      pergunta: "Quais são os documentos essenciais que preciso para me estabelecer no Brasil?",
      resposta: "Os documentos essenciais para se estabelecer no Brasil incluem seu passaporte válido, visto (se necessário), CPF (Cadastro de Pessoas Físicas), carteira de identidade (RG), comprovante de residência, certidão de nascimento ou casamento, e possivelmente outros documentos específicos dependendo da sua situação, como visto de trabalho ou documentos educacionais. Recomendamos verificar com o consulado brasileiro ou autoridades locais para garantir que você tenha todos os documentos necessários.",
    },
    {
      id: 4,
      pergunta: "Como faço para obter um visto para morar no Brasil?",
      resposta: "Para obter um visto para morar no Brasil, você geralmente precisa se inscrever no consulado brasileiro em seu país de origem. Os tipos de visto disponíveis dependem da sua situação, como trabalho, estudo, investimento ou reunião familiar. Cada tipo de visto tem requisitos específicos, então é importante verificar os documentos necessários e o processo de solicitação no site oficial do consulado brasileiro.",
    },
  ];

  const handlePerguntaClick = (index: number) => {
    if (perguntaExpandida === index) {
      
      setPerguntaExpandida(null);
    } else {
      
      setTimeout(() => {
        setPerguntaExpandida(index);
      }, TEMPO_DE_ESPERA);
    }
  };

  return (
    <div className="container-perguntas">
      <h1>Perguntas frequentes</h1>
      <ul className="container-peguntas-respostas">
        {perguntasRespostas.map(({ id, pergunta, resposta }, index) => (
          <li
            key={id}
            className={`pergunta ${
              perguntaExpandida === index && "pergunta-expandida" 
            }`}
            onClick={() => handlePerguntaClick(index)}
          >
            <div>
              {pergunta}
              <img src="mais.svg" alt="Mais" />
            </div>

            {perguntaExpandida === index && (
              <div className="resposta">{resposta}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perguntas;
