import { App } from "vue";
import { getComponentPrefix, setGlobalConfig } from "../_utils/global-config";
import { GOptions } from "../_utils/types";
import _Icon from "./Icon.vue";

import _IconLeft from "./IconLeft.vue";
import _IconMenu from "./IconMenu.vue";
import _IconMenuFold from "./IconMenuFold.vue";
import _IconMenuUnfold from "./IconMenuUnfold.vue";
import _IconRight from "./IconRight.vue";

const Icon = Object.assign(_Icon, {
  IconLeft: _IconLeft,
  IconMenu: _IconMenu,
  IconMenuFold: _IconMenuFold,
  IconMenuUnfold: _IconMenuUnfold,
  IconRight: _IconRight,
  install: (app: App, options?: GOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _Icon.name, _Icon);
    app.component(componentPrefix + _IconLeft.name, _IconLeft);
    app.component(componentPrefix + _IconMenu.name, _IconMenu);
    app.component(componentPrefix + _IconMenuFold.name, _IconMenuFold);
    app.component(componentPrefix + _IconMenuUnfold.name, _IconMenuUnfold);
    app.component(componentPrefix + _IconRight.name, _IconRight);
  },
});

export type IconInstance = InstanceType<typeof _Icon>;
export type IconProps = IconInstance["$props"];

export type IconLeftInstance = InstanceType<typeof _IconLeft>;
export type IconMenuInstance = InstanceType<typeof _IconMenu>;
export type IconMenuFoldInstance = InstanceType<typeof _IconMenuFold>;
export type IconMenuUnfoldInstance = InstanceType<typeof _IconMenuUnfold>;
export type IconRightInstance = InstanceType<typeof _IconRight>;

export default Icon;

export {
  _IconLeft as IconLeft,
  _IconMenu as IconMenu,
  _IconMenuFold as IconMenuFold,
  _IconMenuUnfold as IconMenuUnfold,
  _IconRight as IconRight,
};
