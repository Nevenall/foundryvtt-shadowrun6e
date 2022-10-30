import gulp from 'gulp'
let { parallel, series, src, dest, watch } = gulp
import fs from 'fs'
import path from 'path'
import through from 'through2'
import replace from 'gulp-replace'
import sourcemaps from 'gulp-sourcemaps'
let  { init, write }  = sourcemaps

import concat from "gulp-concat"
import gulpif from 'gulp-if'
import del from 'delete'
import { dirname } from 'path'
import Handlebars from 'handlebars'
import sass from 'sass'
import gulpSass from 'gulp-sass'
import browserSync from 'browser-sync'

let devServer = browserSync.create()


function clean(done) {
   // clean up the dist directory before we start building
   del('dist/**', done)
}


function scss() {
   return src('scss/main.scss')
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(dest('css/'))
}


function develop(done) {
   // devServer.init({
   //    server: './dist',
   //    single: true,
   //    port: 8080,
   //    files: ['dist/**'],
   //    open: false,
   //    notify: false,
   //    // middleware for http2
   // })

   // watch each type of file seperately so we can more efficently run just that pipeline 
   // watch(['testing/index.html', 'testing/data.json', 'templates/**'], content)
   // watch('testing/style.css', styles)
   watch('scss/**', scss)

   done()
}

// build processes files, 
// currently in parallel, but there may be some parts we want to serialize because, of sass and svelte stuff
let build = parallel(
   // assets,
   // components,
   // content,
   // styles,
   // internals,
   // js,
   scss,
   // icons
)

// default task is to clean and run build
let defaultTask = series(
   clean,
   build
)

let devTask = series(build, develop)

export {
   defaultTask as default,
   defaultTask as build,
   devTask as watch,
   clean as clean,
   // styles as styles,
   // components as components
}