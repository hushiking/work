import gulp from 'gulp'
import liveserver from 'gulp-live-server'
import watch from 'gulp-watch'
import args from './util/args.js'

gulp.task('serve', (cb) => {
  if(!args.watch) return cb()

  var server = liveserver.new(['--harmony', 'server/bin/www'])
  server.start()

  // gulp.watch 不监听文件的新建和删除，建议使用gulp-watch插件监听
  gulp.watch(['server/app.js'], function() {
    console.log('监听开始')
  })

  // 使用gulp-watch插件监听文件添加与删除
  watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
    console.log('js与ejs文件发生变化')
    server.notify.apply(server, [file])
  })

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
    console.log('路由与首页发生变化')
    server.start.bind(server)()
  })
})