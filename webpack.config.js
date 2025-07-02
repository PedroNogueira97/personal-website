const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('admin', './assets/admin/index.js')
  .enableReactPreset() // lets Encore handle Babel + React
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableTypeScriptLoader()
  .enablePostCssLoader()
  .enableSassLoader();


// Get the full Webpack config object
const config = Encore.getWebpackConfig();

// Manually set Webpack target (correct way)
config.target = 'web';

module.exports = config;
