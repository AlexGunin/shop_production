import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const PORT = env.port || 3000;
  const MODE = env.mode || BuildMode.DEVELOPMENT;
  const isDev = MODE === BuildMode.DEVELOPMENT;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    port: PORT,
    isDev,
  });

  return config;
};
