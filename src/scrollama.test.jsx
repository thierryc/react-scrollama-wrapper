import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Scrollama, Step, ScrollamaContext } from "./index";

const scrollamaMock = vi.hoisted(() => {
  const instances = [];

  const createScroller = () => {
    const scroller = {
      setup: vi.fn(() => scroller),
      onStepEnter: vi.fn(() => scroller),
      onStepExit: vi.fn(() => scroller),
      onStepProgress: vi.fn(() => scroller),
      resize: vi.fn(),
      destroy: vi.fn(),
    };
    instances.push(scroller);
    return scroller;
  };

  return {
    instances,
    scrollama: vi.fn(createScroller),
  };
});

vi.mock("scrollama", () => ({
  default: scrollamaMock.scrollama,
}));

beforeEach(() => {
  scrollamaMock.instances.length = 0;
  scrollamaMock.scrollama.mockClear();
  vi.spyOn(window, "addEventListener");
  vi.spyOn(window, "removeEventListener");
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Step", () => {
  it("registers its DOM node with the nearest provider and unregisters on unmount", () => {
    const unregister = vi.fn();
    const register = vi.fn(() => unregister);

    const { unmount } = render(
      <ScrollamaContext.Provider value={register}>
        <Step data-testid="step">Step content</Step>
      </ScrollamaContext.Provider>
    );

    expect(register).toHaveBeenCalledTimes(1);
    expect(register).toHaveBeenCalledWith(
      expect.objectContaining({ current: screen.getByTestId("step") })
    );

    unmount();

    expect(unregister).toHaveBeenCalledTimes(1);
  });

  it("throws a clear error outside a Scrollama provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<Step>Step content</Step>)).toThrow(
      "useScrollamaContext must be used within a ScrollamaProvider"
    );

    consoleError.mockRestore();
  });
});

describe("Scrollama", () => {
  it("sets up scrollama with configured options and callbacks", () => {
    const parent = document.createElement("main");
    const onStepEnter = vi.fn();
    const onStepExit = vi.fn();
    const onStepProgress = vi.fn();

    render(
      <Scrollama
        offset={0.25}
        progress
        debug
        threshold={8}
        once
        parent={parent}
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        onStepProgress={onStepProgress}
      >
        <Step data-testid="step">Step content</Step>
      </Scrollama>
    );

    const scroller = scrollamaMock.instances[0];
    const step = screen.getByTestId("step");

    expect(scrollamaMock.scrollama).toHaveBeenCalledTimes(1);
    expect(scroller.setup).toHaveBeenLastCalledWith({
      step: [step],
      offset: 0.25,
      progress: true,
      debug: true,
      threshold: 8,
      once: true,
      parent,
    });
    expect(scroller.onStepEnter).toHaveBeenLastCalledWith(onStepEnter);
    expect(scroller.onStepExit).toHaveBeenLastCalledWith(onStepExit);
    expect(scroller.onStepProgress).toHaveBeenLastCalledWith(onStepProgress);
  });

  it("preserves user callback response objects from scrollama", () => {
    const onStepEnter = vi.fn();
    const onStepExit = vi.fn();
    const onStepProgress = vi.fn();

    render(
      <Scrollama
        progress
        onStepEnter={onStepEnter}
        onStepExit={onStepExit}
        onStepProgress={onStepProgress}
      >
        <Step data-testid="step">Step content</Step>
      </Scrollama>
    );

    const scroller = scrollamaMock.instances[0];
    const step = screen.getByTestId("step");
    const enterResponse = { element: step, index: 0, direction: "down" };
    const exitResponse = { element: step, index: 0, direction: "up" };
    const progressResponse = { element: step, index: 0, progress: 0.5, direction: "down" };

    scroller.onStepEnter.mock.lastCall[0](enterResponse);
    scroller.onStepExit.mock.lastCall[0](exitResponse);
    scroller.onStepProgress.mock.lastCall[0](progressResponse);

    expect(onStepEnter).toHaveBeenCalledWith(enterResponse);
    expect(onStepExit).toHaveBeenCalledWith(exitResponse);
    expect(onStepProgress).toHaveBeenCalledWith(progressResponse);
  });

  it("reconfigures scrollama when options and callbacks change", () => {
    const firstEnter = vi.fn();
    const secondEnter = vi.fn();

    const { rerender } = render(
      <Scrollama offset={0.25} onStepEnter={firstEnter}>
        <Step data-testid="step">Step content</Step>
      </Scrollama>
    );

    const scroller = scrollamaMock.instances[0];

    rerender(
      <Scrollama offset={0.75} onStepEnter={secondEnter}>
        <Step data-testid="step">Step content</Step>
      </Scrollama>
    );

    expect(scroller.setup).toHaveBeenLastCalledWith(
      expect.objectContaining({ offset: 0.75 })
    );
    expect(scroller.onStepEnter).toHaveBeenLastCalledWith(secondEnter);
  });

  it("destroys the scroller and removes the resize listener on unmount", () => {
    const { unmount } = render(
      <Scrollama>
        <Step data-testid="step">Step content</Step>
      </Scrollama>
    );

    const scroller = scrollamaMock.instances[0];

    unmount();

    expect(scroller.destroy).toHaveBeenCalled();
    expect(window.removeEventListener).toHaveBeenCalledWith("resize", scroller.resize);
  });
});
