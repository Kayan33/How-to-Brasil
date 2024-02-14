import { title } from "process";

export const api = {
  carregarInterreses: async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let json = await response.json();

    return json;
  },
};

const adicionarUsuario = async (title: string, body: string, useId: number) => {
  try {
      const response = await fetch("https://fakestoreapi.com/products", {
          method: 'POST',
          body: JSON.stringify({
              title,
              body,
              userId: useId 
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
};

