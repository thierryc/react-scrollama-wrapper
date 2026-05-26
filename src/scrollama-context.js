import { createContext, useContext } from "react";

/**
 * @typedef {(ref: import("react").RefObject<HTMLElement | null>) => void | (() => void)} RegisterStep
 */

const ScrollamaContext = createContext(
  /** @type {RegisterStep | undefined} */ (undefined)
);

/**
 * @returns {RegisterStep}
 */
const useScrollamaContext = () => {
  const context = useContext(ScrollamaContext);
  if (typeof context !== "function") {
    throw new Error("useScrollamaContext must be used within a ScrollamaProvider");
  }
  return context;
};

export { ScrollamaContext, useScrollamaContext };
