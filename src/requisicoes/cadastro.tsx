import { useState,useEffect } from "react"
import { api } from "../api";
import { typeUsuario } from "../types/usuarios";


function  RequisicaoCadastro () {
  const [usuarios, setUsuarios] = useState<typeUsuario[]>([]);

  const handleCadastro = async () => {
    // Supondo que os valores necessários estejam definidos previamente
    const nome = "Exemplo";
    const ultimoNome = "Sobrenome";
    const statusMigratorio = "residente";
    const interesses = "programação"; // agora é uma string
    const email = "exemplo@email.com";
    const senha = "senha123";
  
    try {
      // Faz a chamada para adicionar o usuário
      let json = await api.adicionarUsuario(nome, ultimoNome, statusMigratorio, interesses, email, senha);
      if (json.id) {
        // Se um ID é retornado, o usuário foi adicionado com sucesso
        alert("Usuário adicionado com sucesso! ID: " + json.id);
        // Atualiza o estado de usuários
        setUsuarios((usuarios) => [...usuarios, json]);
      } else {
        // Se não foi retornado um ID, houve algum erro
        alert("Falha ao adicionar usuário");
      }
    } catch (error) {
      // Se houver um erro na chamada à API, tratamos aqui
      console.error("Erro ao adicionar usuário:", error);
      alert("Erro ao adicionar usuário. Verifique o console para mais detalhes.");
    }
  };
  
  // Chamamos a função de cadastro
  handleCadastro();
  
    return(
        <div>
          <button ></button>
        </div>
    );
    }
    export default RequisicaoCadastro

 


   