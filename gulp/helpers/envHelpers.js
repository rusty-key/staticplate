module.exports = {
  enableBuildMode: () => { process.env.BUILD_MODE = true; },
  isBuildMode: () => { return process.env.BUILD_MODE; },
  isProduction: () => {
    return ['prod', 'production'].includes(process.env.NODE_ENV);
  },
};
