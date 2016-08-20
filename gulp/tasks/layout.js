const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const errorHandler = require('../helpers/errorHandler');
const isDevMode = require('../helpers/envHelpers').isDevMode;

module.exports = function() {
  return gulp.src('app/*.pug')
    .pipe($.pug({
      basedir: '.',
      pretty: isDevMode()
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('build'));
};
