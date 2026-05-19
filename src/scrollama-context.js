import { createContext, useContext } from "react";

const ScrollamaContext = createContext(undefined);

const useScrollamaContext = () => {
  const context = useContext(ScrollamaContext);
  if (typeof context !== "function") {
    throw new Error("useScrollamaContext must be used within a ScrollamaProvider");
  }
  return context;
};

export { ScrollamaContext, useScrollamaContext };
