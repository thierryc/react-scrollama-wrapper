import React, { useRef, useEffect } from "react";
import { useScrollamaContext } from "./scrollama-context";

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement> & {
 *   children?: import("react").ReactNode
 * }} StepProps
 */

/**
 * @param {StepProps} props
 */
const Step = ({ children, ...primitiveProps }) => {
  /** @type {import("react").RefObject<HTMLDivElement | null>} */
  const stepRef = useRef(null);
  const registerStep = useScrollamaContext();

  useEffect(() => {
    const remove = registerStep(stepRef);
    return () => {
      if (typeof remove === "function") {
        remove();
      }
    };
  }, [registerStep]);

  return (
    <div ref={stepRef} {...primitiveProps}>
      {children}
    </div>
  );
};

export default Step;
