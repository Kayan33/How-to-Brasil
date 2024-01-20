import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/usuario.css";

function Menu() {
  const [isModalOpen, setModalOpen] = useState(false);

  const menuItems = [
    { icon: "/dashboard/trabalho.svg", label: "Trabalho", link: "/trabalho" },
    { icon: "/dashboard/educacao.svg", label: "Educação", link: "/educacao" },
    { icon: "/dashboard/documentacao.svg", label: "Documentação", link: "/documentacao" },
    { icon: "/dashboard/casa.svg", label: "Casa", link: "/casa" },
    { icon: "/dashboard/apoio.svg", label: "Apoio", link: "/apoio" },
    { icon: "/dashboard/saude.svg", label: "Saúde", link: "/saude" },
  ];

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    
      <div
        className="bg-Dashboard"
        style={{
          maxWidth: isModalOpen ? "180px" : "100px",
          transition: "max-width 0.7s ease-in-out",
        }}
      >
        <header className="perfl">
          <img src="perfil.svg" alt="" />
        </header>
        <div className="botao-menu" onClick={openModal}>
          <img src="/dashboard/seta.svg" alt="" 
          style={{
            transform: isModalOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.7s ease-in-out",
          }}/>
        </div>

        <ul className={`imagem-svg ${isModalOpen ? "visible" : ""}`}>
          {menuItems.map((menuItem, index) => (
            <Link to={menuItem.link} key={index} className={`menu-item ${isModalOpen ? "visible" : ""}`} onClick={closeModal}>
              <img src={menuItem.icon} alt={menuItem.label} />
              {isModalOpen && (
                <div
                  className={`menu-hamburger ${isModalOpen ? "visible" : ""}`}
                >
                  <p>{menuItem.label}</p>
                </div>
              )}
            </Link>
          ))}
        </ul>
      </div>
    
  );
}

export default Menu;
