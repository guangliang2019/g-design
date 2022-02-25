
import { App, Plugin } from 'vue'
import { GOptions } from '../_utils/type'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import _Layout from './Layout.vue'
import _LayoutHeader from './LayoutHeader.vue'
import _LayoutContent from './LayoutContent.vue'
import _LayoutFooter from './LayoutFooter.vue'
import _LayoutSider from './LayoutSider.vue'


const Layout = Object.assign(_Layout, {
  Headers: _LayoutHeader,
  Content: _LayoutContent,
  Footer: _LayoutFooter,
  Sider: _LayoutSider,
  install: (app: App, options?: GOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Layout.name, _Layout)
    app.component(componentPrefix + _LayoutHeader.name, _LayoutHeader)
    app.component(componentPrefix + _LayoutContent.name, _LayoutContent)
    app.component(componentPrefix + _LayoutFooter.name, _LayoutFooter)
    app.component(componentPrefix + _LayoutSider.name, _LayoutSider)
  }
})

export type LayoutInstance = InstanceType<typeof _Layout>;
export type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;

export {
  _LayoutHeader as LayoutHeader,
  _LayoutContent as LayoutContent,
  _LayoutFooter as LayoutFooter,
  _LayoutSider as LayoutSider,
};

export default Layout;