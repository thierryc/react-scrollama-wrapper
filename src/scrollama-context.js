import { createContext, useContext } from "react";

const ScrollamaContext = createContext(() => {});

const useScrollamaContext = () => {
    return useContext(ScrollamaContext);
};

export { ScrollamaContext, useScrollamaContext };