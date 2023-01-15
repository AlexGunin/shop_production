export enum BuildMode {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
}
