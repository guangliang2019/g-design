
import { App } from 'vue'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import { GOptions } from '../_utils/type'
import _ConfigProvider from './config-provider.vue'
const ConfigProvider = Object.assign(_ConfigProvider, {
  install: (app: App, options?: GOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _ConfigProvider.name, _ConfigProvider)
  }
})

export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>

export default ConfigProvider