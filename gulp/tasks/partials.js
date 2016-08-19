'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function () {

  return gulp.src(['app/partials/**/*.jade'])
    .pipe($.concat('partials.jade'))
    .pipe(gulp.dest('.tmp'));
};
