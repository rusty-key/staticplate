'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var errorHandler = require('../helpers/errorHandler');

var isDevMode = require('../helpers/envHelpers').isDevMode;

module.exports = function() {
  return gulp.src('app/assets/scripts/app.js')
    .pipe($.if(isDevMode, $.sourcemaps.init()))
    .pipe($.browserify({ debug : isDevMode }))
    .on('error', errorHandler)
    .pipe($.if(!isDevMode, $.uglify()))
    .pipe($.if(isDevMode, $.sourcemaps.init()))
    .pipe(gulp.dest('build/assets/scripts/'));
};
