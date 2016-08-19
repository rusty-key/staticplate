'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var bsync = require('browser-sync');
var isDevMode = require('../helpers/envHelpers').isDevMode;
var errorHandler = require('../helpers/errorHandler');

var styles = '';

module.exports = function () {
  return gulp.src('app/assets/styles/app.css')
    .pipe($.if(isDevMode, $.sourcemaps.init()))
    .pipe($.postcss([
      require('postcss-import')(),
      require('postcss-mixins'),
      require('postcss-custom-properties'),
      require('autoprefixer')({browsers: ['last 1 version']})
    ]))
    .on('error', errorHandler)
    .pipe($.if(isDevMode, $.sourcemaps.write()))
    .pipe(gulp.dest('build/assets/styles'))
    .pipe(bsync.reload({stream: true}));
};
