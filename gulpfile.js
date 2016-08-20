const gulp = require('gulp');
const gs = require('gulp-sync')(gulp)
const $ = require('gulp-load-plugins')();
const envHelpers = require('./gulp/helpers/envHelpers');

gulp.task('clean', require('./gulp/tasks/clean'));
gulp.task('scripts', require('./gulp/tasks/scripts'));
gulp.task('styles', require('./gulp/tasks/styles'));
gulp.task('layout', require('./gulp/tasks/layout'));

gulp.task('enableBuildMode', envHelpers.enableBuildMode);

const defaultBuildSequence = ['clean', ['layout', 'scripts', 'styles']];

gulp.task('build', gs.sync(['enableBuildMode'].concat(defaultBuildSequence)));
gulp.task('serve', gs.sync(defaultBuildSequence), require('./gulp/tasks/serve'));

gulp.task('default', ['serve']);
