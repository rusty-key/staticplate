const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const errorHandler = require('../helpers/errorHandler');
const isProduction = require('../helpers/envHelpers').isProduction;

module.exports = function() {
  return gulp.src('app/*.pug')
    .pipe($.pug({
      basedir: '.',
      pretty: !isProduction()
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest('build'));
};
