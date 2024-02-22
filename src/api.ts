import { title } from "process";

export const api = {
  carregarInterreses: async () => {
    let response = await fetch("http://localhost:3001/interesses/");
    let json = await response.json();

    return json;
  },

  carregarMoradia: async () => {
    let response = await fetch("http://localhost:3001/moradia");
    let json = await response.json();

    return json;
  },
 
  adicionarCadastro: async (nome: String,ultimoNome: String, statusMigratorio: String,interesses: String,email: String,senha: String,) => {
    {
      let response = await fetch("http://localhost:3001/usuarios", {
        method: 'POST',
        body: JSON.stringify({
          nome,
          ultimoNome,
          statusMigratorio,
          interesses,
          email,
          senha,

        }),
        headers: {
          'Content-Type': 'application/json' 
        }
      });
    
      const json = await response.json();
      console.log (json)
      return json;
    
    }
  },



  fazerLogin: async (email: String,senha: String,) => {
    {
      let response = await fetch("http://localhost:3001/usuarios/login", {
        method: 'POST',
        body: JSON.stringify({
          
          email,
          senha,

        }),
        headers: {
          'Content-Type': 'application/json' 
        }
      });
      
      const json = await response.json();
      console.log(json);
      return json;
    
    
  }


}}
