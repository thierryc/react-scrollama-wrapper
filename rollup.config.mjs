import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.js",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'tslib'],
  plugins: [
    peerDepsExternal(),
    babel({
      presets: ["@babel/env", "@babel/preset-react"],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" })  // Add TypeScript plugin
  ],
};