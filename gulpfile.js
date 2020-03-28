const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cssbeautify = require('gulp-cssbeautify');
    
sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compilaSass);

function compilaSass() {
  return gulp
    .src("public/assets/scss/style.scss")
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(gulp.dest("public/assets/css"));
}

function watch() {
  gulp.watch("public/assets/scss/*.scss", compilaSass);
}