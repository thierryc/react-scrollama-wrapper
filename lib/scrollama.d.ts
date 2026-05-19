export default Scrollama;
declare function Scrollama({ children, offset, progress, debug, onStepEnter, onStepExit, onStepProgress, threshold, once, parent, ...primitiveProps }: {
    [x: string]: any;
    children: any;
    offset?: number;
    progress?: boolean;
    debug?: boolean;
    onStepEnter?: () => void;
    onStepExit?: () => void;
    onStepProgress?: () => void;
    threshold?: number;
    once?: boolean;
    parent?: any;
}): React.JSX.Element;
import React from "react";
