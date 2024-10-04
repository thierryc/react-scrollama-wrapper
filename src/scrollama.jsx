import React, { useState, useRef, useEffect, useCallback } from "react";
import { ScrollamaContext } from "./scrollama-context";
import scrollama from "scrollama";

const Scrollama = ({
  children,
  offset = 0.5,
  progress = false,
  debug = false,
  onStepEnter = () => {},
  onStepExit = () => {},
  onStepProgress = () => {},
  threshold = 4,
  once = false,
  parent = undefined,
  ...primitiveProps
}) => {
  const [scroller] = useState(() => scrollama());
  const stepsRef = useRef([]);

  const reset = useCallback(() => {
    window.removeEventListener("resize", scroller.resize);
    scroller.destroy();
    initialize();
    window.addEventListener("resize", scroller.resize);
  }, [scroller]);

  const setupRef = useCallback((ref) => {
    if (ref && ref.current) {
      stepsRef.current.push(ref.current);
      reset();
      return () => {
        stepsRef.current = stepsRef.current.filter((step) => step !== ref.current);
        reset();
      };
    }
  }, [reset]);

  const initialize = useCallback(() => {
    if (stepsRef.current.length <= 0) {
      return;
    }

    scroller
      .setup({
        step: stepsRef.current,
        offset,
        progress: progress ? true : false,
        debug: debug ? true : false,
        threshold,
        once,
        parent,
      })
      .onStepEnter(onStepEnter)
      .onStepExit(onStepExit)
      .onStepProgress(onStepProgress);
  }, [scroller, offset, progress, debug, threshold, once, parent, onStepEnter, onStepExit, onStepProgress]);

  useEffect(() => {
    initialize();
    window.addEventListener("resize", scroller.resize);

    return () => {
      scroller.destroy();
      window.removeEventListener("resize", scroller.resize);
    };
  }, []);

  return (
    <div {...primitiveProps}>
      <ScrollamaContext.Provider value={setupRef}>
        {children}
      </ScrollamaContext.Provider>
    </div>
  );
};

export default Scrollama;