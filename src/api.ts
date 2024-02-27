import { title } from "process";

export const api = {
  carregarSaude: async () => {
    let response = await fetch("http://localhost:3001/interesses/1");
    let json = await response.json();

    return json;
  },
  carregarEducacao: async () => {
    let response = await fetch("http://localhost:3001/interesses/2");
    let json = await response.json();

    return json;
  },
  carregarApoio: async () => {
    let response = await fetch("http://localhost:3001/interesses/3");
    let json = await response.json();

    return json;
  },

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

  carregarDocumentacao: async () => {
    let response = await fetch("http://localhost:3001/documentacao");
    let json = await response.json();

    return json;
  },

  carregarTrabalho: async () => {
    let response = await fetch("http://localhost:3001/trabalho");
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
  

  


},

TrocaSenha: async (email: String,senha: String,) => {
  {
    let response = await fetch("http://localhost:3001/usuarios/trocaSenha", {
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





},
}
