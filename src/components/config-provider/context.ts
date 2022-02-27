import { InjectionKey, Slots } from "vue";
import { Size } from "../_utils/constant";

export interface configProvider {
  prefixCls?: string;
  size?: Size;
  slots: Slots;
}

export const configProviderInjectionKey: InjectionKey<configProvider> =
  Symbol("gConfigProvider");
