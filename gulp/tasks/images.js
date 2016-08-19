'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var isDevMode = require('../helpers/envHelpers').isDevMode;

module.exports = function () {
  var __basedir = 'app/assets/images/';

  var assets = [
    __basedir + '**/*.mp4',
    __basedir + '**/*.jpg',
    __basedir + '**/*.png',
    __basedir + '**/*.svg',
    __basedir + '**/*.gif'
  ];

  return gulp.src(assets)
    .pipe(gulp.dest('build/assets/images'))
};
