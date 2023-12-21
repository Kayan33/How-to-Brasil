import React, { useState } from "react";
import "../../style/style.css";

function Perguntas() {
  const [perguntaExpandida, setPerguntaExpandida] = useState<number | null>(
    null
  );

  const perguntasRespostas = [
    {
      pergunta: "Preciso pagar alguma coisa?",
      resposta: "Não, totalmente de graça."
    },
    {
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta."
    },
    {
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta."
    },
    {
      pergunta: "Outra pergunta?",
      resposta: "Outra resposta."
    },
    
  ];

  return (
    <div className="container-perguntas">
      <h1>Perguntas frequentes</h1>
      <ul className="container-peguntas-respostas">
        {perguntasRespostas.map((item, index) => (
          <li key={index}>
            <div className="pergunta">
              {item.pergunta}
              <img
                onClick={() =>
                  setPerguntaExpandida(
                    perguntaExpandida === index ? null : index
                  )
                }
                src="mais.svg"
              />
            </div>

            {perguntaExpandida === index && (
              <div className="resposta">{item.resposta}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Perguntas;
