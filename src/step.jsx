import React, { useRef, useEffect } from "react";
import { useScrollamaContext } from "./scrollama-context";

const Step = ({ children, ...primitiveProps }) => {
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
