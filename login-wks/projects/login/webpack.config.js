
const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

// Version 14
module.exports = withModuleFederationPlugin({
  name: 'login',

  exposes: {
    './Module': './projects/login/src/app/sample/sample.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
