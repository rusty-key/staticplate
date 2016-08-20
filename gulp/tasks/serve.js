const gulp = require('gulp');
const bsync = require('browser-sync');
const $ = require('gulp-load-plugins')();

module.exports = () => {
  bsync({
    notify: false,
    port: 9010,
    open: false,
    ghostMode: false,
    proxy: 'localhost:3000',
    files: '.build/**',
    middleware: require('serve-static')('.build')
  });

  gulp.watch(['app/assets/styles/**/*.pcss', 'app/assets/styles/**/*.css'], ['styles']);
  gulp.watch(['app/**/*.pug'], ['layout']);;

  gulp.watch(['build/index.html'], bsync.reload);;
}
