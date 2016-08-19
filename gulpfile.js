'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var gs = require('gulp-sync')(gulp);

gulp.task('clean', require('./gulp/tasks/clean'));
gulp.task('styles', require('./gulp/tasks/styles'));
gulp.task('libs', require('./gulp/tasks/libs'));
gulp.task('scripts', require('./gulp/tasks/scripts'));
gulp.task('layout', require('./gulp/tasks/layout'));
gulp.task('images', require('./gulp/tasks/images'));

gulp.task('devmode', require('./gulp/helpers/envHelpers').enableDevMode);

var defaultBuildSequence = [
  'clean',
  ['styles', 'images', 'libs', 'scripts', 'layout']
];

gulp.task('build', gs.sync(defaultBuildSequence));
gulp.task('serve', gs.sync(['devmode'].concat(defaultBuildSequence)), require('./gulp/tasks/serve'));
gulp.task('default', ['serve']);
