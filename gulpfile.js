const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cssbeautify = require('gulp-cssbeautify');
    
sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compilaSass);

function compilaSass() {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(gulp.dest("assets/css"));
}

function watch() {
  gulp.watch("assets/scss/**/*.scss", compilaSass);
}