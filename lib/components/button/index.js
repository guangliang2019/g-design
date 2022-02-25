import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config';
import _Button from './button.vue';
const Button = Object.assign(_Button, {
    install: (app, options) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _Button.name, _Button);
    }
});
export default Button;
//# sourceMappingURL=index.js.map