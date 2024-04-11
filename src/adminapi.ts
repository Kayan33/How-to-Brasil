export const Adminapi = {
  
  adicionarInteresses: async (tipos:number,nome: String,numero: String, horario: String,linkMaps: String,) => {
    {
      let response = await fetch("https://apihowtobrasil-1-kegn.onrender.com/interesses", {
        method: 'POST',
        body: JSON.stringify({
          tipos,
          nome,
          numero,
          horario,
          linkMaps,

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
