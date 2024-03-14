import { ReactNode, createContext, useState, useEffect } from "react";

type ContextType = {
  name: string;
  setName: (n: string) => void;
};

export const UsuarioLogadoContext = createContext<ContextType | null>(null);

export const UsuarioLogadoProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("ContextName");
    return storedName ? storedName : "";
  });

  useEffect(() => {
    if (name !== "") {
      localStorage.setItem("ContextName", name);
    }
  }, [name]);

  return (
    <UsuarioLogadoContext.Provider value={{ name, setName }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};
