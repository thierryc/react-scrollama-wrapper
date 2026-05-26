export type RegisterStep = (ref: import("react").RefObject<HTMLElement | null>) => void | (() => void);
/**
 * @typedef {(ref: import("react").RefObject<HTMLElement | null>) => void | (() => void)} RegisterStep
 */
export const ScrollamaContext: import("react").Context<RegisterStep>;
/**
 * @returns {RegisterStep}
 */
export function useScrollamaContext(): RegisterStep;
