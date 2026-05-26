import React, { useRef, useEffect, useCallback } from "react";
import { ScrollamaContext } from "./scrollama-context";
import scrollama from "scrollama";

/**
 * @typedef {object} ScrollamaInstance
 * @property {(options: object) => ScrollamaInstance} setup
 * @property {(callback: Function) => ScrollamaInstance} onStepEnter
 * @property {(callback: Function) => ScrollamaInstance} onStepExit
 * @property {(callback: Function) => ScrollamaInstance} onStepProgress
 * @property {() => ScrollamaInstance} resize
 * @property {() => ScrollamaInstance} destroy
 */

const createScrollama =
  /** @type {() => ScrollamaInstance} */ (
    /** @type {unknown} */ (scrollama)
  );

/**
 * @typedef {object} StepCallbackResponse
 * @property {HTMLElement} element
 * @property {number} index
 * @property {"up" | "down"} direction
 */

/**
 * @typedef {object} StepProgressCallbackResponse
 * @property {HTMLElement} element
 * @property {number} index
 * @property {number} progress
 * @property {"up" | "down"} [direction]
 */

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement> & {
 *   children?: import("react").ReactNode,
 *   offset?: number | `${number}px`,
 *   progress?: boolean,
 *   debug?: boolean,
 *   onStepEnter?: (response: StepCallbackResponse) => void,
 *   onStepExit?: (response: StepCallbackResponse) => void,
 *   onStepProgress?: (response: StepProgressCallbackResponse) => void,
 *   threshold?: number,
 *   once?: boolean,
 *   parent?: HTMLElement | Document
 * }} ScrollamaProps
 */

/**
 * @param {ScrollamaProps} props
 */
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
  const scrollerRef = useRef(null);
  const stepsRef = useRef([]);
  const hasSetupRef = useRef(false);

  const getScroller = useCallback(() => {
    if (!scrollerRef.current) {
      scrollerRef.current = createScrollama();
    }
    return scrollerRef.current;
  }, []);

  const initialize = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroller = getScroller();

    if (hasSetupRef.current) {
      scroller.destroy();
      hasSetupRef.current = false;
    }

    if (stepsRef.current.length === 0) {
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

    hasSetupRef.current = true;
  }, [getScroller, offset, progress, debug, threshold, once, parent, onStepEnter, onStepExit, onStepProgress]);

  const setupRef = useCallback(
    /**
     * @param {import("react").RefObject<HTMLElement | null>} ref
     */
    (ref) => {
      if (!ref || !ref.current) {
        return undefined;
      }

      const element = ref.current;

      if (!stepsRef.current.includes(element)) {
        stepsRef.current.push(element);
      }

      initialize();

      return () => {
        stepsRef.current = stepsRef.current.filter((step) => step !== element);
        initialize();
      };
    },
    [initialize]
  );

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const scroller = getScroller();
    window.addEventListener("resize", scroller.resize);

    return () => {
      window.removeEventListener("resize", scroller.resize);
      scroller.destroy();
      scrollerRef.current = null;
      hasSetupRef.current = false;
    };
  }, [getScroller]);

  return (
    <div {...primitiveProps}>
      <ScrollamaContext.Provider value={setupRef}>
        {children}
      </ScrollamaContext.Provider>
    </div>
  );
};

export default Scrollama;
