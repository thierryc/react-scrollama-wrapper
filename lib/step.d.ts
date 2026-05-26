export default Step;
export type StepProps = import("react").HTMLAttributes<HTMLDivElement> & {
    children?: import("react").ReactNode;
};
/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement> & {
 *   children?: import("react").ReactNode
 * }} StepProps
 */
/**
 * @param {StepProps} props
 */
declare function Step({ children, ...primitiveProps }: StepProps): React.JSX.Element;
import React from "react";
