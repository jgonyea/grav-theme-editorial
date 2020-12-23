const gulp = require("gulp");
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function build() {
  return gulp
    .src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact', precision: 10})
    .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./css'))
    
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))

    .pipe(gulp.dest('./css'));
}

function watch() {
  gulp.watch('./**/*.scss');
}

exports.watch = watch;
exports.build = build;
exports.default = build;