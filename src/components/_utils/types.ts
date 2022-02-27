export interface GOptions {
  classPrefix?: string;
  componentPrefix?: string;
}

export interface GIconOptions {
  iconPrefix?: string;
}

export interface GGlobalConfig {
  classPrefix?: string;
}

export type EmitType<T> = T | T[];