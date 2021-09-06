'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require('gulp-clean-css');


function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
};

// gulp.task('minify-css', () => {
//   return gulp.src('css/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./css'));
// });

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', gulp.series('buildStyles'));
};

