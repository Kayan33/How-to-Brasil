import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import Home from "./pages/home";
import Saiba from "./pages/Saiba-mais";
import Notfound from "./pages/notfound";

function App() {
  return (
    <div>
      <Routes>
      <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/Saiba Mais' element={<Saiba/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
