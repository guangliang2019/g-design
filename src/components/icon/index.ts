import { App } from "vue";
import { getComponentPrefix, setGlobalConfig } from "../_utils/global-config";
import { GOptions } from "../_utils/type";
import _Icon from './icon.vue';

const Icon = Object.assign(_Icon, {
  install: (app: App, options?: GOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Icon.name, _Icon)
  }
})

export type IconInstance = InstanceType<typeof _Icon>;
export type IconProps = IconInstance['$props'];

export default Icon;