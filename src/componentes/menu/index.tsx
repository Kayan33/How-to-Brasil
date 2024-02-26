import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/usuario.css";

function Menu() {
  const location = useLocation();

  const menuItems = [
    { icon: "/dashboard/trabalho.svg", label: "Trabalho", link: "/trabalho" },
    { icon: "/dashboard/educacao.svg", label: "Educação", link: "/educacao" },
    { icon: "/dashboard/documentacao.svg", label: "Documentação", link: "/documentacao" },
    { icon: "/dashboard/casa.svg", label: "Casa", link: "/casa" },
    { icon: "/dashboard/apoio.svg", label: "Apoio", link: "/apoio",},
    { icon: "/dashboard/saude.svg", label: "Saúde", link: "/saude" },
  ];

  return (
    <div className="bg-Dashboard">
      <header className="perfl">
        <Link className="logo" to="/Usuario">
          How to <br />
          Brasil
        </Link>
      </header>
      <ul className="imagem-svg">
        {menuItems.map((menuItem, index) => (
          <li key={index} className={`menu-item ${location.pathname === menuItem.link ? 'active' : ''}`}>
            <Link to={menuItem.link}>
              <img src={menuItem.icon} alt={menuItem.label} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
