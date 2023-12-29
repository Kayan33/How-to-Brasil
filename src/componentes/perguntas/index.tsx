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
      pergunta: "Preciso pagar alguma coisa?",
      resposta: "Não, totalmente de graça.",
    },
    {
      id: 2,
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta.",
    },
    {
      id: 3,
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta.",
    },
    {
      id: 4,
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta.",
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
