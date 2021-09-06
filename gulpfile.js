'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'));
};

function imageMin() {
  return gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'))
}


exports.buildStyles = buildStyles;
exports.imageMin = imageMin;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', gulp.series('buildStyles'));
};

exports.default = gulp.series(imageMin, buildStyles);

