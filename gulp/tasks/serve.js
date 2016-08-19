'use strict';

var gulp = require('gulp');
var bsync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var gs = require('gulp-sync')(gulp);

module.exports = function () {
  bsync({
    notify: false,
    port: 9000,
    open: false,
    ghostMode: false,
    server: {
      baseDir: ['build']
    }
  });

  // watch for changes
  gulp.task('partials:watch', gs.sync(['layout']), bsync.reload);
  gulp.watch(['app/partials/**/*.jade'], ['partials:watch']);

  gulp.task('layout:watch', gs.sync(['layout']), bsync.reload);
  gulp.watch(['app/*.jade', 'app/layouts/**/*.jade'], ['layout:watch']);

  gulp.task('scripts:watch', gs.sync(['scripts']), bsync.reload);
  gulp.watch(['app/assets/scripts/**/*.js'], ['scripts:watch']);

  gulp.task('libs:watch', gs.sync(['libs']), bsync.reload);
  gulp.watch(['app/assets/scripts/libs/*.js'], ['libs:watch']);

  gulp.task('styles:watch', gs.sync(['styles']));
  gulp.watch(['app/assets/styles/**/*.css'], ['styles:watch']);

  gulp.task('images:watch', gs.sync(['images']), bsync.reload);
  gulp.watch(['app/assets/images/**'], ['images:watch']);
};
