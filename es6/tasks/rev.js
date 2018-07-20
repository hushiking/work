import gulp from 'gulp'
import revCollector from 'gulp-rev-collector'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args.js'

gulp.task('rev', () => {
    gulp.src(['server/public/**/*.json', 'app/**/*.ejs'])
        .pipe(revCollector({
            replaceRevd: true,
            // 替换原有ejs文件中的路径
            dirReplacements: {
                // 'js': 'public/js',
                '../js/class': '/js',
                '../js': '/js',
                '../css': '/css'
                // 'css': 'public/css',
                // 'css/member': 'public/css/member'
            }
        }))
        .pipe(gulp.dest('server'))
        .pipe(gulpif(args.watch, livereload()))
})