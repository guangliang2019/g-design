const COMPONENT_PREFIX = 'G';
const CLASS_PREFIX = 'g';
const GLOBAL_CONFIG_NAME = '$g';
export const getComponentPrefix = (options) => {
    return options?.componentPrefix ?? COMPONENT_PREFIX;
};
export const setGlobalConfig = (app, options) => {
    if (options && options.classPrefix) {
        app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
            ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
            classPrefix: options.classPrefix,
        };
    }
};
//# sourceMappingURL=global-config.js.map