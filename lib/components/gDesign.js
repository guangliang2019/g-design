import Button from "./button";
const components = {
    Button
};
const install = (app, options) => {
    for (const key of Object.keys(components)) {
        app.use(components[key], options);
    }
};
const GDesign = {
    ...components,
    install
};
export default GDesign;
//# sourceMappingURL=gDesign.js.map