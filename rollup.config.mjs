import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import pkg from "./package.json" with { type: "json" };

const config = [
  {
    input: "src/main.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: getPlugins(),
  },
  {
    input: "dist/types/main.d.ts",
    output: [{ file: pkg.types, format: "es" }],
    plugins: [dts()],
  },
];

export default config;

function getPlugins() {
  return [json(), nodeResolve(), typescript(), terser()];
}
