export default Scrollama;
export type ScrollamaInstance = {
    setup: (options: object) => ScrollamaInstance;
    onStepEnter: (callback: Function) => ScrollamaInstance;
    onStepExit: (callback: Function) => ScrollamaInstance;
    onStepProgress: (callback: Function) => ScrollamaInstance;
    resize: () => ScrollamaInstance;
    destroy: () => ScrollamaInstance;
};
export type StepCallbackResponse = {
    element: HTMLElement;
    index: number;
    direction: "up" | "down";
};
export type StepProgressCallbackResponse = {
    element: HTMLElement;
    index: number;
    progress: number;
    direction?: "up" | "down";
};
export type ScrollamaProps = import("react").HTMLAttributes<HTMLDivElement> & {
    children?: import("react").ReactNode;
    offset?: number | `${number}px`;
    progress?: boolean;
    debug?: boolean;
    onStepEnter?: (response: StepCallbackResponse) => void;
    onStepExit?: (response: StepCallbackResponse) => void;
    onStepProgress?: (response: StepProgressCallbackResponse) => void;
    threshold?: number;
    once?: boolean;
    parent?: HTMLElement | Document;
};
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
declare function Scrollama({ children, offset, progress, debug, onStepEnter, onStepExit, onStepProgress, threshold, once, parent, ...primitiveProps }: ScrollamaProps): React.JSX.Element;
import React from "react";
