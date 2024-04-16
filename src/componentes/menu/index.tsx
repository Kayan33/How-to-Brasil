import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faUser, faBriefcase, faUserGraduate, faBook, faHouse, faUsers, faQuestion, faChevronRight, faRightToBracket, faChartLine, faHeartPulse, } from "@fortawesome/free-solid-svg-icons"; // Import the faUser icon
import "../../style/usuario.css";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

const Menu: React.FC = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  
  const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

  const menuItems = [
    { icon: <FontAwesomeIcon icon={faChartLine} size="xl" />, label: "Usuario", link: "/Usuario" },  
    { icon: <FontAwesomeIcon icon={faBriefcase} size="xl" />, label: "Trabalho", link: "/trabalho" },
    { icon: <FontAwesomeIcon icon={faUserGraduate} size="xl" />, label: "Educação", link: "/educacao" }, 
    { icon: <FontAwesomeIcon icon={faBook} size="xl" />, label: "Documentação", link: "/documentacao" },
    { icon: <FontAwesomeIcon icon={faHouse} size="xl" />, label: "Casa", link: "/casa" },
    { icon: <FontAwesomeIcon icon={faUsers} size="xl" />, label: "Apoio", link: "/apoio"},
    { icon: <FontAwesomeIcon icon={faHeartPulse} size="xl" />, label: "Saúde", link: "/saude" }, 
    { icon: <FontAwesomeIcon icon={faQuestion} size="xl" />, label: "Dúvidas", link: "/duvidas" }, // Corrigido para usar o ícone faQuestion
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const index = menuItems.findIndex(item => item.link === location.pathname);
    setActiveIndex(index);
  }, [location.pathname, menuItems]);

  return (
    
    <nav id="sidebar" className={isSidebarOpen ? 'open-sidebar' : ''}>
      <div id="sidebar_content">
        <div id="user">
        <FontAwesomeIcon icon={faUser} size="xl" />
          <p id="user_infos">
            <span className="item-description">{UsuarioLogadoCtx?.nome}</span>
            <span className="item-description">{UsuarioLogadoCtx?.ultimoNome}</span>
          </p>
        </div>

        <ul id="side_items">
          {menuItems.map((item, index) => (
            <li className={index === activeIndex ? 'side-item active' : 'side-item'} key={index}>
              <Link to={item.link}>
                {item.icon}
                <span className="item-description">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button id="open_btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faChevronRight} /> {/* Corrigido para usar o ícone faChevronRight */}
        </button>
      </div>

      <div id="logout">
        <button id="logout_btn">
        <FontAwesomeIcon icon={faRightToBracket} size="xl"/>
          <span className="item-description">Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default Menu;
