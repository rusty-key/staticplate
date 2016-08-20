const gulp = require('gulp');
const bsync = require('browser-sync');
const $ = require('gulp-load-plugins')();

module.exports = () => {
  bsync({
    notify: false,
    port: 9000,
    open: false,
    ghostMode: false,
    server: {
      baseDir: ['build']
    }
  });

  gulp.watch(['app/assets/styles/**/*.pcss', 'app/assets/styles/**/*.css'], ['styles']);
  gulp.watch(['app/**/*.pug'], ['layout']);;

  gulp.watch(['build/*.html'], bsync.reload);;
}
