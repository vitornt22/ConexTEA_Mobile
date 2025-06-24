import React, {createContext, useContext, useEffect, useState} from 'react';

// Tipo do contexto
type AppContextType = {
  studentId: number;
  setStudentId: (id: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [studentId, setStudentId] = useState<number>(0); // Começa sem id (0 = nenhum selecionado)

  // Aqui você busca ou define ao iniciar
  useEffect(() => {
    const initStudentId = async () => {
      // 🔹 Exemplo: pegar de um storage, API, lógica
      // Simulando um carregamento com setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000)); // simula delay
      const fetchedId = 42; // 🔹 valor que você buscou ou decidiu
      setStudentId(fetchedId);
    };

    initStudentId();
  }, []);

  return (
    <AppContext.Provider value={{studentId, setStudentId}}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar o contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};
