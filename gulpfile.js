var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');

gulp.task('default', ['minify-html','sass']);

gulp.task('minify-html', function() {
  return gulp.src('./src/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest(''));
});

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));
});

gulp.watch(['./src/index.html','./src/style.scss'],['default']);