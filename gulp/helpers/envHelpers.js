var flags = require('minimist')(process.argv.slice(2));

module.exports = {
  enableDevMode: function() { process.env.DEV_MODE = true; },
  isDevMode: function() { return process.env.DEV_MODE + '' === 'true'; },
  isProductionMode: function() {
    return flags.production || flags.prod || false;
  }
};
