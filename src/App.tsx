import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import Saiba from "./pages/Saiba-mais";
import Notfound from "./pages/notfound";
import Cadastro from "./componentes/cadastrar/cadastrar";

function App() {
  return (
    <div>
      <Routes>
      <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastrar' element={<Cadastro/>}></Route>
        <Route path='/Saiba Mais' element={<Saiba/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
