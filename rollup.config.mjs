import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const dev = process.env.ROLLUP_WATCH === "true" || process.env.NODE_ENV === "development";

export default {
  input: "src/timer-schedule-card.ts",
  output: {
    file: "timer-schedule-card.js",
    format: "es",
    sourcemap: dev ? "inline" : false,
  },
  plugins: [
    nodeResolve({ browser: true }),
    typescript({
      tsconfig: "./tsconfig.json",
      outDir: ".",
      sourceMap: dev,
      inlineSources: dev,
    }),
    !dev && terser({
      format: { comments: false },
      compress: { drop_console: false },
    }),
  ].filter(Boolean),
  watch: {
    clearScreen: false,
  },
};
