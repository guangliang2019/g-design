import { InjectionKey, Slots } from "vue";

export interface configProvider {
  prefixCls?: string;
  slots: Slots;
}

export const configProviderInjectionKey: InjectionKey<configProvider> = Symbol('gConfigProvider')