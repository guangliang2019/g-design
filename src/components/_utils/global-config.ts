import { App, getCurrentInstance, inject } from "vue";
import { configProviderInjectionKey } from '../config-provider/context';
import { GOptions } from "./types";

const COMPONENT_PREFIX = 'G';
const CLASS_PREFIX = 'g';
const GLOBAL_CONFIG_NAME = '$g';

export const getComponentPrefix = (options?: GOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX;
};

export const setGlobalConfig = (app: App, options?: GOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    };
  }
};

export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, undefined)
  const prefix = configProvider?.prefixCls ?? instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ?? CLASS_PREFIX
  if (componentName) return `${prefix}-${componentName}`
  return prefix
}
