var gulp = require('gulp');
var code = require('gulp-code');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var open = require('gulp-open');

gulp.task('js', function () {
  return gulp.src('./yscroll.js')
    .pipe(code.lint())
    .pipe(rename(function (path) {
      path.basename = path.basename + '.min';
    }))
    .pipe(code.minify())
    .pipe(gulp.dest('./'));
});

gulp.task('connect', function () {
  return connect.server({
    root: ['./'],
    livereload: true,
    port: '3000'
  });
});
gulp.task('open', function () {
  return gulp.src('./demo/index.html').pipe(open('', { url: 'http://localhost:3000/demo/index.html'}));
});

gulp.task('default', ['js']);
gulp.task('server', ['connect', 'open']);