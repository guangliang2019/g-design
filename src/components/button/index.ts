
import type { App } from 'vue'
import type { GOptions } from '../_utils/types'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import _Button from './Button.vue'

const Button = Object.assign(_Button, {
  install: (app: App, options?:GOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Button.name, _Button)
  }
})

export type ButtonInstance = InstanceType<typeof _Button>
export type ButtonProps = ButtonInstance['$props']

export default Button