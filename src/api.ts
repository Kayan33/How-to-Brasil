import { title } from "process";

export const api = {
  carregarInterreses: async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let json = await response.json();

    return json;
  },
};

adicionarUsuario: async (title: string, body: string, useId:number) =>{
    let response = await fetch("https://fakestoreapi.com/products",
{
    method: 'post'
    body : JSON.stringify
    ({
        title,
        body,
        useId:1}),
        headers:{
            'content-type' : 'appication/json'
        }
}
),
let json = await response.json();
};

