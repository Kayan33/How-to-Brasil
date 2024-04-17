import React from "react";
import { Route, Routes } from "react-router-dom";
import { UsuarioLogadoProvider } from "./contexts/contextAuth";
import Login from "./pages/Login";
import Home from "./pages/home";
import Saiba from "./pages/Saiba-mais";
import Notfound from "./pages/notfound";
import Cadastrar from "./pages/Cadastrar";
import EsqueciSenha from "./componentes/esqueciSenha";
import Usuario from "./pages/usuario";
import Pgtrabalho from "./pages/trabalho";
import Pgsaude from "./pages/saude";
import Pgeducacao from "./pages/educacao";
import Pgecasa from "./pages/casa";
import Pgeapoio from "./pages/Apoio";
import Pgedocumentacao from "./pages/documentacao";
import PgDuvidas from "./pages/duvidaspg";
import AdminSaude from "./pages/admin/adminsaude";
import AdminApoio from "./pages/admin/adminapoio";
import AdminEducacao from "./pages/admin/admineducacao";


function App() {
  return (
    <div>

      <UsuarioLogadoProvider>

      <Routes>
      <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/EsqueciSenha' element={<EsqueciSenha/>}></Route>
        <Route path='/Saiba Mais' element={<Saiba/>}></Route>
        <Route path='/Usuario' element={<Usuario/>}></Route>
        <Route path='/trabalho' element={<Pgtrabalho/>}></Route>
        <Route path='/saude' element={<Pgsaude/>}></Route>
        <Route path='/educacao' element={<Pgeducacao/>}></Route>
        <Route path='/documentacao' element={<Pgedocumentacao/>}></Route>
        <Route path='/casa' element={<Pgecasa/>}></Route>
        <Route path='/apoio' element={<Pgeapoio/>}></Route>
        <Route path='/duvidas' element={<PgDuvidas/>}></Route>
        <Route path='/adminsaude' element={<AdminSaude/>}></Route>
        <Route path='/adminapoio' element={<AdminApoio/>}></Route>
        <Route path='/admineducação' element={<AdminEducacao/>}></Route>

        
      </Routes>
      
      </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
