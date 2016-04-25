var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify');

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

gulp.task('minify-js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(''));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('connect:src', function() {
  connect.server({
    root: './src',  });
});

gulp.watch(['./src/index.html','./src/style.scss','./src/app.js'],['default']);

gulp.task('default', ['minify-html','sass','minify-js']);
