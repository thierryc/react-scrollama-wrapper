import React from "react";
import { describe, it } from "vitest";
import { Scrollama, Step, useScrollamaContext } from "@ap.cx/react-scrollama-wrapper";

const enterHandler = (response: { element: HTMLElement; index: number; direction: "up" | "down" }) => {
  response.element.dataset.publicApi = String(response.index);
  response.direction satisfies "up" | "down";
};

const progressHandler = (response: {
  element: HTMLElement;
  index: number;
  progress: number;
  direction?: "up" | "down";
}) => {
  response.element.dataset.progress = String(response.progress + response.index);
};

export const ConsumerUsage = () => (
  <Scrollama
    className="story"
    offset={0.5}
    progress
    onStepEnter={enterHandler}
    onStepExit={enterHandler}
    onStepProgress={progressHandler}
  >
    <Step data-testid="step">Step content</Step>
  </Scrollama>
);

export const CustomStep = () => {
  const registerStep = useScrollamaContext();
  const stepRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const unregister = registerStep(stepRef);
    return () => {
      unregister?.();
    };
  }, [registerStep]);

  return <div ref={stepRef}>Custom step</div>;
};

describe("public API types", () => {
  it("compiles consumer usage examples", () => {});
});
