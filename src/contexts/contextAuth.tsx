import { ReactNode, createContext, useState, useEffect } from "react";

type ContextType = {
  name: string;
  setNmae: (n: string) => void;
  nome: string;
  setNome: (n: string) => void;
  ultimoNome:string;
  setUltimoNome: (n: string) => void;
};

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setNmae] = useState(() => {
    const storedsetNmae = localStorage.getItem("ContextsetNmae");
    return storedsetNmae ? storedsetNmae : "";
  });

  const [nome, setNome] = useState(() => {
    const storedNome = localStorage.getItem("ContextNome");
    return storedNome ? storedNome : "";
  });

  const [ultimoNome, setUltimoNome] = useState(() => {
    const storeduLtimoNome = localStorage.getItem("ContextUltimoNome");
    return storeduLtimoNome ? storeduLtimoNome : "";
  });

  useEffect(() => {
    if (name !== "") {
      localStorage.setItem("ContextName", name);
    }
    if (nome !== "") {
      localStorage.setItem("ContextNome", nome);
    }
    if (ultimoNome !== "") {
      localStorage.setItem("ContextUltimoNome", ultimoNome);
    }
  }, [name,nome,ultimoNome]);

  return (
    <UsuarioLogadoContext.Provider value={{ name, nome,ultimoNome, setNmae, setNome,setUltimoNome }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
