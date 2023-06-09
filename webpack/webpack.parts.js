const path = require("path");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const preprocess = require("svelte-preprocess");

exports.typescript = () => ({
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },
});

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /.(le|c)ss$/i,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            "css-loader",
            {
              loader: "less-loader",
            },
          ].concat(loaders),
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
  };
};

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: 3000,
      static: path.resolve(process.cwd(), "dist"),
      historyFallback: true,
    }),
  ],
});

exports.page = ({ title }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ publicPath: "/", context: { title } })],
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.svelte = (mode) => {
  const prod = mode === "production";

  return {
    resolve: {
      alias: {
        svelte: path.dirname(require.resolve("svelte/package.json")),
      },
      extensions: [".mjs", ".js", ".svelte", ".ts"],
      mainFields: ["svelte", "browser", "module", "main"],
      conditionNames: ["svelte", "browser"],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              compilerOptions: {
                dev: !prod,
              },
              emitCss: prod,
              hotReload: !prod,
              preprocess: preprocess({
                postcss: true,
                less: true,
              }),
            },
          },
        },
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };
};

exports.optimize = () => ({
  optimization: {
    minimize: true,
    splitChunks: { chunks: "all" },
    runtimeChunk: { name: "runtime" },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});
