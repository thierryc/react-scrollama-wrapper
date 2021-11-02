import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { babel } from "@rollup/plugin-babel"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const pkg = require("./package.json")

export default [
  {
    input: "src/index.js",
    external: [
      'react',
      'react-dom',
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        presets: ["@babel/env", "@babel/preset-react"],
        babelHelpers: 'bundled',
      }),
      resolve({
        extensions: [".js", ".jsx"],
      }),
      commonjs(),
    ],
  },
]
