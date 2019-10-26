const { addBabelPlugin, override } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
  (config, env) => {
    if (process.env.NODE_ENV === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
