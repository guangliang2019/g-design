import type { App } from 'vue';
import type { GOptions } from '../_utils/type';
import _Button from './button.vue';
declare const Button: {
    new (...args: any[]): any;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App, options?: GOptions | undefined) => void;
};
export declare type ButtonInstance = InstanceType<typeof _Button>;
export declare type ButtonProps = ButtonInstance['$props'];
export default Button;
