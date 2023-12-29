import React, { useState } from "react";
import "../../style/Bemvindo.css";
import { Link } from "react-router-dom";

interface Modal {
  title: string;
  content: string;
  isFirst: boolean;
  buttons?: string[];
  
}

function BemVindo() {
  const [modalIndex, setModalIndex] = useState<number>(0);
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const modals: Modal[] = [
    {
      title: "Bem vindo, Kayan",
      content:
        "Chegou o momento de iniciar sua jornada de adaptação legal no Brasil, com a nossa aplicação web exclusiva para imigrantes recém-chegados! Vamos personalizar suas configurações para garantir uma experiência única e eficiente.",
      isFirst: true,
    },

    {
      title: "Qual é o seu status migratório atual?",
      content:
        "Essa pergunta pode ajudar a determinar as necessidades específicas do usuário com base em seu status migratório",
      buttons: [
        "Turista",
        "Estudante",
        "Refugiado",
        "Asilado",
        "Trabalhador Temporário",
        "Residente Permanente",
      ],
      isFirst: false,
    },

    {
      title: "Quais são suas interesses imediatos ao chegar no Brasil?",
      content:
        "Entender as necessidades imediatas do usuário, como encontrar emprego...",
      buttons: [
        "emprego",
        "assistência médica",
        "educacional",
        " Moradia",
        " Documentação",
        " ONG",
      ],
      isFirst: false,
    },

    // Adicione os outros modals aqui...
  ];

  const handleNextModal = () => {
    if (modalIndex < modals.length - 1) {
      setModalIndex((prevIndex) => prevIndex + 1);
      setSelectedButtons([]); // Reset selectedButtons when moving to the next modal
    }
  };

  const handleButtonClick = (button: string) => {
    if (modalIndex === 2 && selectedButtons.length < 3) {
      setSelectedButtons((prevSelected) => [...prevSelected, button]);
    } else {
      setSelectedButtons([button]);
    }
  };

  return (
    <div className="container">
      <div className="container-bg">
        {modals[modalIndex].isFirst && (
          <div className="teste">
            <img src="/mapa-mundo-brasil.svg" alt="" />
            <div className="texto">
              <h1>{modals[modalIndex].title}</h1>
              <p>{modals[modalIndex].content}</p>

              <button className="saiba-mais" onClick={handleNextModal}>
                VAMOS LÁ!
              </button>
            </div>
          </div>
        )}

        {!modals[modalIndex].isFirst && (
          <div className="teste">
            <div className="modeel-button">
              {modals[modalIndex].buttons?.map((button, index) => (
                <button
                className={`f-button${
                  selectedButtons.includes(button) ? "-selected" : ""
                }`}
                key={index}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
              ))}
            </div>

            <div className="texto">
              <h1>{modals[modalIndex].title}</h1>
              <p>{modals[modalIndex].content}</p>

              {modalIndex === modals.length - 1 ? (
                <Link to="/">
                  <button className="saiba-mais">VAMOS LÁ!</button>
                </Link>
              ) : (
                <button className="saiba-mais" onClick={handleNextModal}>
                  VAMOS LÁ!
                </button>
              )}
            </div>
          </div>
        )}

        <div className="container-bolinha">
          {modals.map((_, index) => (
            <div
              key={index}
              className={`bolinha${index === modalIndex ? "-colorida" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BemVindo;
