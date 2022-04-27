import { App, Plugin } from "vue";
import Button from "./button";
import ConfigProvider from "./config-provider";
import Icon, { IconMenu, IconMenuFold, IconMenuUnfold } from "./icon";
import Layout, {
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
} from "./layout";
import Menu, { MenuItem, MenuItemGroup, SubMenu } from "./menu";
import { GOptions } from "./_utils/types";

const components: Record<string, Plugin> = {
  Button,
  ConfigProvider,
  Icon,
  Layout,
  Menu,
};

const install = (app: App, options?: GOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

const icons = {
  IconMenu,
  IconMenuFold,
  IconMenuUnfold,
};

const GDesign = {
  ...components,
  ...icons,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
  MenuItem,
  MenuItemGroup,
  SubMenu,
  install,
};

export default GDesign;
