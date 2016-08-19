'use strict';

var del = require('del');

module.exports = function() {
  return del(['build', '.tmp']);
};
