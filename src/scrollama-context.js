import { createContext, useContext } from "react";

const ScrollamaContext = createContext(null);

const useScrollamaContext = () => {
  const context = useContext(ScrollamaContext);
  if (context === undefined) {
    throw new Error("useScrollamaContext must be used within a ScrollamaProvider");
  }
  return context;
};

export { ScrollamaContext, useScrollamaContext };