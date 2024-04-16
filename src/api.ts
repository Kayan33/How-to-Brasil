import { title } from "process";

export const api = {
  carregarSaude: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/1");
    let json = await response.json();

    return json;
  },
  carregarEducacao: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/2");
    let json = await response.json();

    return json;
  },
  carregarApoio: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/3");
    let json = await response.json();
    
    return json;
  },
  
  

  carregarMoradia: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/4");
    let json = await response.json();

    return json;
  },

  carregarDocumentacao: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/5");
    let json = await response.json();

    return json;
  },

  carregarTrabalho: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/6");
    let json = await response.json();

    return json;
  },

  carregarDuvidas: async () => {
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses/7");
    let json = await response.json();

    return json;
  },

 
  adicionarCadastro: async (nome: String,ultimoNome: String, statusMigratorio: String,interesses: String,email: String,senha: String,) => {
    {
      let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/usuario", {
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



  fazerLogin: async (email: String,senha: String) => {
    {
      let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/usuario/login", {
        method: 'POST',
        body: JSON.stringify({
          
          email,
          senha

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
    let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/usuario/troca-senha", {
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
