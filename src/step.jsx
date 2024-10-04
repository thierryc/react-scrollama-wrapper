import React, { useRef, useEffect, useContext } from "react";
import { ScrollamaContext } from "./scrollama-context";

const Step = ({ children, ...primitiveProps }) => {
  const stepRef = useRef(null);
  const context = useContext(ScrollamaContext);

  useEffect(() => {
    const remove = context(stepRef);
    return () => {
      remove();
    };
  }, [context]);

  return (
    <div ref={stepRef} {...primitiveProps}>
      {children}
    </div>
  );
};

export default Step;