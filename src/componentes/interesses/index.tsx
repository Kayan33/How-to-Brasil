import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/interesse.css";

function Interesses() {
  return (
    <div className="interesse-container">
      <h1>INTERESSES</h1>
      <div className="interesse-bg">
        <div className="interesse-img">
          <img src="/Slider1.png" alt="" />

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
          <img src="/Slider2.png" alt="" />

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
          <img src="/Slider3.png" alt="" />

          <h3>APOIO COMUNITÁRIO</h3>
          <p>
            Conecte-se com a comunidade local e outros imigrantes, seja através
            de grupos online, eventos locais, ou instituições de apoio a
            imigrantes.
          </p>
          <hr />
          <Link className="saiba-mais" to="/apoio">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/Slider4.png" alt="" id="EducaImg"/>

          <h3>EDUCAÇÃO</h3>
          <p>
            Assim como em outros países, no Brasil temos acesso a educação gratuita para crianças e jovens 
            até a idade de 18 anos, dividas na esfera municipal, sendo mais focada em educação de base, esfera estadual, 
            focada em ensino médio e técnico, e por fim a esfera federal, normalmente voltada para ensino superior.
          </p>
          <hr />
          <Link className="saiba-mais" to="/educacao">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/Slider5.png" alt="" />

          <h3>CASA</h3>
          <p>
            Em nosso país possuimos acesso a alguns métodos alternativos para conquistar a sua moradia de forma mais acessível,
            sendo o mais comum o auxilio da COHAB, instrumento governamental que permite acesso a terrenos
             pré-determinados com custo abaixo da média de mercado.
          </p>
          <hr />
          <Link className="saiba-mais" to="/casa">
            VER MAIS
          </Link>
        </div>

        <div className="interesse-img">
          <img src="/Slider6.png" alt="" id="DocImg" />

          <h3>DOCUMENTAÇÃO</h3>
          <p>
            Sendo este provavelmente o tema mais importante a ser apresentado, no tópico em questão daremos o passo a passo 
            sobre a documentação necessaria para continuar em território nacional de forma legalizada, evitando possíveis problemas
             para com a justiça, além de também informarmos localizações onde você deverá comparecer com os documentos, e postos onde será possível 
             tirar duvidas a respeito deste assunto.
          </p>
          <hr />
          <Link className="saiba-mais" to="/documentacao">
            VER MAIS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Interesses;
