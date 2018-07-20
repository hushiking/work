import gulp from 'gulp'
import gulpif from 'gulp-if'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import rev from 'gulp-rev'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import { log, colors } from 'gulp-util'
import args from './util/args.js'

gulp.task('scripts', () => {
    return gulp.src('app/**/*.js')
        .pipe(plumber({
            errorHandle: function () {
                
            }
        }))
        // 给流文件任意的chunk name（可以防止webpack合并js文件）
        .pipe(named())
        // gulpWebpack第二个参数可以传'webpack'，表示使用自定义版本的webpack；传null默认使用webpack1.15.0版本，注意配合babel-loader版本
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }, null, (err, stats) => {
            log(`Finished ${colors.cyan('scripts')}`, stats.toString({
                chunks: false
            }))
        }))
        .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
        // 为js生成md5文件名
        .pipe(rev())
        .pipe(gulp.dest('server/public/js'))
        // 记录js文件名对应md5名
        .pipe(rev.manifest())
        // 记录文件xx.json存放位置
        .pipe(gulp.dest('server/public/rev/js'))
        // webpack会将js合并为一个xxxxx.js文件
        // .pipe(rename({
        //     basename: 'cp',
        //     extname: '.min.js'
        // }))
        .pipe(gulpif(args.watch, livereload()))
})