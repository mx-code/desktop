var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifyHtml = require("gulp-minify-html"),
    minifyCss = require("gulp-minify-css"),
    imagemin = require('gulp-imagemin'),
    concat=require('gulp-concat'),
    pngquant = require('imagemin-pngquant'); //png图片压缩插件


gulp.task('defaultJs', function () {
    return gulp.src('js/*.js')
        // 这会输出一个未压缩过的版本
        .pipe(gulp.dest('js/'))
        // 这会输出一个压缩过的并且重命名未 .min.js 的文件
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('js/'));
});


gulp.task('defaultHtml', function () {
    gulp.src('html/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
         .pipe(rename({
            extname: '.min.html'
        }))
    .pipe(gulp.dest('html/'));
});


gulp.task('defaultCss', function () {  //压缩css
    return gulp.src('css/*.css')
        // 这会输出一个未压缩过的版本
        .pipe(gulp.dest('css/'))
        // 这会输出一个压缩过的并且重命名未   的文件
        .pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('css/'));
});



gulp.task('defaultPic', function () {  //图片压缩
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('img/pic'));
});

