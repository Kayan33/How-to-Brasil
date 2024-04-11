export const Adminapi = {
  
  adicionarInteresses: async (tipos:number,nome: String,Numero: String, Horario: String,LinkMaps: String,) => {
    {
      let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses", {
        method: 'POST',
        body: JSON.stringify({
          tipos,
          nome,
          Numero,
          Horario,
          LinkMaps,

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

  deleteInteresse: async (id: string) => {
    let response = await fetch(`https://apihowtobrasil-1-kegn.onrender.com/interesses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' 
      }
    });
  
    const json = await response.json();
    console.log(json);
    return json;
  }
   

}
