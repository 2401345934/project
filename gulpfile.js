const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const webserver = require('gulp-webserver');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const jsmin = require('gulp-uglify');
const babel = require('gulp-babel');
const del = require('del');


//css打包
const cssHandler = () => {
    return gulp.src('./src/css/*.css')
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}


// js 打包
const jsHandler = () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel( { presets: ["@babel/env"]}))
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js'))
}


// html 打包
const htmlHandler = () => {
return  gulp.src('./src/pages/*.html')
        .pipe(htmlmin({
        collapseWhitespace: true,  //取出空格 和换行
        removeAttributeQuotes: true,  //移除属性上面的双引号
        removeEmptyAttributes: true ,  //移除空属性
        removeComments: true,  //移除注释
        removeScriptTypeAttributes: true, //移除script type属性
        removeStyleLinkTypeAttributes: true, //移除style 和link 标签的type属性
        collapseBooleanAttributes: true,  //把布尔值的属性 简写
        minifyCss: true,  //把html页面的style 压缩
        minifyJs: true,  //把html 页面的script压缩
    }))
        .pipe(gulp.dest('./dist/pages'))
}


//移动图片
const imgHandler = () => {
    return gulp.src('./src/img/**')
        .pipe(gulp.dest('./dist/img'))
}


// 移动公共资源
const libHandler = () => {
    return gulp.src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'))
}
// 移动font
const fontHandler = () => {
    return gulp.src('./src/font/**')
        .pipe(gulp.dest('./dist/font'))
}


// 移动公PHP
const phpHandler = () => {
    return gulp.src('./src/php/**')
        .pipe(gulp.dest('./dist/php'))
}

//一起执行
const delHandler = () => {
    return del(['./dist']);
}

const watchHandler = () => {
    gulp.watch('./src/css/*.css',cssHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/img/**',imgHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/lib/**',libHandler)
    gulp.watch('./src/php/**',phpHandler)
}

const serverHandler = () => {
    return gulp.src('./dist')
        .pipe(webserver({
            port: 8088,    //端口号
            open: './pages/index.html',   //默认打开的首页 从dist 下面开始书写
            livereload: true,   //热重启 自动刷新浏览器
        }))
}

module.exports.default = gulp.series(delHandler,gulp.parallel(cssHandler,htmlHandler,imgHandler,libHandler,phpHandler,fontHandler,jsHandler),serverHandler,watchHandler)