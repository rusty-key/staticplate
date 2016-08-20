const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserify = require('browserify');
const bulkify = require('bulkify');
const babelify = require('babelify');
const watchify = require('watchify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const bsync = require('browser-sync');
const errorHandler = require('../helpers/errorHandler');
const envHelpers = require('../helpers/envHelpers');

module.exports = function() {
  const isProduction = envHelpers.isProduction();
  const browserifyOptions = {
    entries: 'app/assets/scripts/app.js',
    debug: !isProduction,
    cache: {},
    packageCache: {},
  };

  let bundler = browserify(browserifyOptions);
  bundler
    .transform(bulkify)
    .transform(babelify, { presets: ['es2015'] });

  function rebundle() {
    return bundler.bundle()
      .on('error', errorHandler)
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe($.if(isProduction, $.streamify($.uglify())))
      .pipe(gulp.dest('build/assets/scripts'))
      .pipe($.if(!isProduction,
        bsync.reload({
          stream: true,
          once: true,
        })
      ));
  }

  if (!isProduction) {
    bundler = watchify(bundler);
    bundler.on('update', function() {
      $.util.log(`Updating '${$.util.colors.cyan('scripts')}'`);
      rebundle();
    });
    bundler.on('log', $.util.log.bind($.util));
  }

  return rebundle();
};
