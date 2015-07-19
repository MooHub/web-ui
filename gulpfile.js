var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

gulp.task('default', ['minify-html']);

gulp.task('minify-html', function() {
  return gulp.src('./src/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest(''));
});