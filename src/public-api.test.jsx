import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

const publicExports = [
  "Scrollama",
  "Step",
  "ScrollamaContext",
  "useScrollamaContext",
];

const expectPublicApi = (moduleExports) => {
  expect(Object.keys(moduleExports).sort()).toEqual([...publicExports].sort());

  for (const exportName of publicExports) {
    expect(moduleExports[exportName]).toBeDefined();
  }
};

describe("public package API", () => {
  it("exposes the public exports through ESM package imports", async () => {
    const moduleExports = await import("@ap.cx/react-scrollama-wrapper");

    expectPublicApi(moduleExports);
  });

  it("exposes the public exports through CommonJS package requires", () => {
    const require = createRequire(import.meta.url);
    const moduleExports = require("@ap.cx/react-scrollama-wrapper");

    expectPublicApi(moduleExports);
  });

  it("keeps the legacy lib/index.js subpath import compatible", async () => {
    const moduleExports = await import("@ap.cx/react-scrollama-wrapper/lib/index.js");

    expectPublicApi(moduleExports);
  });

  it("keeps the legacy lib/index.js subpath require compatible", () => {
    const require = createRequire(import.meta.url);
    const moduleExports = require("@ap.cx/react-scrollama-wrapper/lib/index.js");

    expectPublicApi(moduleExports);
  });
});
