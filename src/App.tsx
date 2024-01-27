import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import Saiba from "./pages/Saiba-mais";
import Notfound from "./pages/notfound";
import Cadastrar from "./pages/Cadastrar";
import EsqueciSenha from "./componentes/esqueciSenha";
import BemVindo from "./componentes/Bemvindo";
import Usuario from "./pages/usuario";
import Pgtrabalho from "./pages/trabalho";

function App() {
  return (
    <div>
      <Routes>
      <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/Esqueci-Senha' element={<EsqueciSenha/>}></Route>
        <Route path='/Bem-vindo' element={<BemVindo/>}></Route>
        <Route path='/Saiba Mais' element={<Saiba/>}></Route>
        <Route path='/Usuario' element={<Usuario/>}></Route>
        <Route path='/Trabalho' element={<Pgtrabalho/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
