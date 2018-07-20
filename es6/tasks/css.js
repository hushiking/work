import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import rev from 'gulp-rev'
import concat from 'gulp-concat'
import cleanCss from 'gulp-clean-css'
import args from './util/args.js'

gulp.task('css', () => {
  // 默认以**为基准文件夹
  return gulp.src('app/css/**/*.css')
    // .pipe(concat('index.min.css'))
    .pipe(cleanCss())
    // 为css生成md5名称
    .pipe(rev())
    .pipe(gulp.dest('server/public/css'))
    // 记录文件名对应md5名
    .pipe(rev.manifest())
    // 记录文件xx.json存放位置
    .pipe(gulp.dest('server/public/rev/css'))
})