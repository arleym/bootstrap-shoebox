module.exports = {
  plugins: {
    'autoprefixer': {},
    'cssnano': {},
    'postcss-modules': {
      getJSON: function(cssFileName, json, outputFileName) {
        const fs = require('fs');
        const path = require('path');
        const isComponent = /components/.test(path.dirname(cssFileName));

        if (isComponent) {
          const cssName = path.basename(`${cssFileName}`);
          const jsonFileName = path.resolve(`${path.dirname(cssFileName)}/${cssName.split('.')[0]}-css.json`);
          fs.writeFileSync(jsonFileName, JSON.stringify(json));
        }
      }
    }
  }
};
