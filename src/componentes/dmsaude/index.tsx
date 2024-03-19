import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "../../style/trabalho.css";
import { typesInteresses } from "../../types/Interesses";
import { api } from "../../api";

function DmSaude() {
  return (
    <div className="trabalho-container">
      <header className="header-input">
        <div className="header-nome">
          <h2>Interesses </h2>
<div className="envio">

          <input type="email" placeholder="nome empresa" />
          <input type="email"  placeholder="Link Maps" />
          <input type="email"  placeholder="telefone" />
          <input type="number"  name="tentacles" min="1" max="5" />
          <button className="s" >
          enviar
        </button>
</div>
        </div>
      </header>
    </div>
  );
}

export default DmSaude;
