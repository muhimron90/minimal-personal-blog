const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const isDev = PHASE_DEVELOPMENT_SERVER;
const ANALYTICS = '';
module.exports = (phase, { defaultConfig }) => {
  if (phase === isDev) {
    return {
      reactStrictMode: true,
      webpack: (config,opts) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
        }
    };
  }
    return {
        analyticsId: ANALYTICS || ''
    };
};