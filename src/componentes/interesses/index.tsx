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
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider2.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider3.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/slider/Slider1.png" alt="" />

          <h3>SAÚDE</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="">
            VER MAIS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interesses;
