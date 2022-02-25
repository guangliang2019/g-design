module.exports = {
  install(less, pluginManager, functions) {
    functions.add('get-rgb-str', (color) => {
      if(color.value.indexOf("rgb") === 0) {
        return color.rgb[0] + ',' + color.rgb[1] + ',' + color.rgb[2]
      }
      return color;
    });

    functions.add('get-var-str', (color) => {
      if (color.value.indexOf('rgb') === 0) {
        return color.value.replace(/rgb\((.*)\)/, '$1');
      }
      return color
    });
  },
};
