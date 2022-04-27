import type { App } from "vue";
import type { GOptions } from "../_utils/types";
import { setGlobalConfig, getComponentPrefix } from "../_utils/global-config";
import _Menu from "./Menu.vue";
import _MenuItem from './MenuItem.vue';
import _MenuItemGroup from "./MenuItemGroup.vue";
import _MenuSubMenu from "./SubMenu.vue";

const Menu = Object.assign(_Menu, {
  Item: _MenuItem,
  ItemGroup: _MenuItemGroup,
  SubMenu: _MenuSubMenu,
  install: (app: App, options?: GOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Menu.name, _Menu);
    //app.component(componentPrefix + _MenuItem.name, _MenuItem);
    app.component(componentPrefix + _MenuItemGroup.name, _MenuItemGroup);
    app.component(componentPrefix + _MenuSubMenu.name, _MenuSubMenu);
  },
});

export type MenuInstance = InstanceType<typeof _Menu>;
export type MenuItemInstance = InstanceType<typeof _MenuItem>;
export type MenuItemGroupInstance = InstanceType<typeof _MenuItemGroup>;
export type MenuSubMenuInstance = InstanceType<typeof _MenuSubMenu>;

export {
  _MenuItem as MenuItem,
  _MenuItemGroup as MenuItemGroup,
  _MenuSubMenu as SubMenu,
};

export default Menu;
