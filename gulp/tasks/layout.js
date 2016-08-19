'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var errorHandler = require('../helpers/errorHandler');
var isDevMode = require('../helpers/envHelpers').isDevMode;

module.exports = function() {
  return gulp.src('app/*.jade')
    .pipe($.insert.prepend('include /.tmp/partials.jade\n'))
    .pipe($.jade({
      basedir: '.',
      pretty: isDevMode()
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('build'));
};
