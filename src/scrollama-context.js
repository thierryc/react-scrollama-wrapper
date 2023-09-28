import { createContext, useContext } from "react";

const ScrollamaContext = createContext();

const useScrollamaContext = () => useContext(ScrollamaContext);

export { ScrollamaContext, useScrollamaContext };