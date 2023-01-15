import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const createScssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        },
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
});

const svgLoader = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

const fileLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  return [
    typescriptLoader,
    createScssLoader(options.isDev),
    svgLoader,
    fileLoader,
    babelLoader,
  ];
}
