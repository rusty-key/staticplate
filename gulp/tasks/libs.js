'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function() {
  return gulp.src('app/assets/scripts/lib/*.js')
    .pipe($.concat('libs.js'))
    .pipe(gulp.dest('build/assets/scripts'));
};
