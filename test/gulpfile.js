var gulp = require('gulp')
var uglify = require('gulp-uglify')
var del = require('del')
var jshint = require('gulp-jshint')
var pkg = require('./package')

var jshintConfig = pkg.jshintConfig
console.log(jshintConfig)
// jshintConfig.lookup = false

gulp.task('clean', function(cb) {
  del('build')
  cb()
})

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'))
})

gulp.task('minify', function() {
  gulp.src('js/farbtastic.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
})

gulp.task('default', ['clean', 'js', 'minify'])