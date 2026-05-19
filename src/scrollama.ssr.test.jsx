// @vitest-environment node
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { Scrollama, Step } from "./index";

const scrollamaMock = vi.hoisted(() => vi.fn());

vi.mock("scrollama", () => ({
  default: scrollamaMock,
}));

describe("Scrollama SSR", () => {
  it("does not instantiate scrollama during server render", () => {
    renderToString(
      <Scrollama>
        <Step>Step content</Step>
      </Scrollama>
    );

    expect(scrollamaMock).not.toHaveBeenCalled();
  });
});
