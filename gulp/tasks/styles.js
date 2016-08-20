const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const bsync = require('browser-sync');
const isProduction = require('../helpers/envHelpers').isProduction;
const errorHandler = require('../helpers/errorHandler');

module.exports = function() {
  return gulp.src('app/assets/styles/app.css')
    .pipe($.cssGlobbing({
      extensions: ['.css', '.pcss'],
    }))
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.postcss([
      require('postcss-import')(),
      require('postcss-mixins'),
      require('postcss-conditionals'),
      require('postcss-calc')({ mediaQueries: true }),
      require('postcss-nested'),
      require('postcss-simple-vars'),
      require('autoprefixer')({ browsers: ['last 2 version'] }),
    ]))
    .on('error', errorHandler)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('build/assets/styles'))
    .pipe(bsync.reload({ stream: true }));
};
