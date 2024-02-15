import { title } from "process";

export const api = {
  carregarInterreses: async () => {
    let response = await fetch("http://localhost:3001/usuarios/");
    let json = await response.json();

    return json;
  },
 
  adicionarUsuario: async (nome: String,ultimoNome: String, statusMigratorio: String,interesses: String,email: String,senha: String,) => {
    try {
      const response = await fetch("http://localhost:3001/usuarios", {
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
      return json;
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      throw error;
    }
    
  }



};
 
