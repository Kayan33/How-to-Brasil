import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/interesse.css";

function Interesses() {
  return (
    <div className="interesse-container">
      <h1>INTERESSES</h1>
      <div className="interesse-bg">
        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            No Brasil temos acesso ao sistema único de saúde gratuito conhecido como SUS, 
            nesta página você poderá ter mais informações sobre como utilizá-lo de forma prática com informações e 
            locais mais próximos.
          </p>
          <hr />
          <Link className="saiba-mais" to="/saude">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider2.png" alt="" />

          <h3>TRABALHO</h3>
          <p>
            Aqui nós iremos mostrar as possibilidades de trabalho em território nacional, 
            com enfase em empresas apoiadoras de imigrantes, garantido a você um bom início em nosso país.
          </p>
          <hr />
          <Link className="saiba-mais" to="/trabalho">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider3.png" alt="" />

          <h3>APOIO COMUNITÁRIO</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais, ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="/Apio">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>EDUCAÇÃO</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="/Educação">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>CASA</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="Casa">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>DOCUMENTAÇÃO</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="/Documentação">
            VER MAIS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interesses;
