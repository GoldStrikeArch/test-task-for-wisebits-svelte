const path = require("path");
const { merge } = require("webpack-merge");
const { mode } = require("webpack-nano/argv");

const parts = require("./webpack.parts");

const MAIN = "main.ts";

const commonParts = merge([
  { output: { path: path.resolve(process.cwd(), "dist") } },
  parts.page({ title: "Wisebits test task" }),
  parts.svelte(mode),
  parts.typescript(),
  parts.extractCSS(),
]);

const development = merge([
  { entry: [`./src/${MAIN}`, "webpack-plugin-serve/client"] },
  { target: "web" },
  parts.devServer(),
]);
const production = merge([{ entry: [`./src/${MAIN}`] }, parts.optimize()]);

const generateConfig = (mode) => {
  console.log("mode is", mode);
  switch (mode) {
    case "production":
      return merge(commonParts, production, { mode });
    case "development":
      return merge(commonParts, development, { mode });
    default:
      throw new Error(`Unknown mode, ${mode}`);
  }
};

module.exports = generateConfig(mode);
