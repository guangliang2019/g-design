import { RenderFunction } from "vue";

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

export type BaseType = string | number;
export type Data = Record<string, any>;
export type EmitType<T> = T | T[];
export type RenderContent = string | RenderFunction;
