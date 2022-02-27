import { App, Plugin } from "vue";
import Button from "./button";
import ConfigProvider from "./config-provider";
import Icon from "./icon";
import Layout, {
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
} from './layout';
import { GOptions } from "./_utils/types";


const components: Record<string, Plugin> = {
  Button,
  ConfigProvider,
  Icon,
  Layout,
};

const install = (app: App, options?: GOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

const GDesign = {
  ...components,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
  install,
};

export default GDesign;
