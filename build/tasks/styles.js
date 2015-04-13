var gulp = require('gulp');
var paths = require('../paths');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass-dev', function(done) {
    gulp.src(paths.style.src)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'android 4', 'ios >= 6'],
            cascade: false
        }))
        .pipe(rename(paths.style.out))
        .pipe(gulp.dest(paths.output))
        .on('end', done);
});

gulp.task('watch-sass', ['sass-dev'], function() {
    gulp.watch(paths.style.watch, ['sass-dev']);
});

gulp.task('sass', function(done) {
    gulp.src(paths.style.src)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'android 4', 'ios >= 6'],
            cascade: false
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0,
            noAdvanced: true
        }))
        .pipe(rename(paths.style.out))
        .pipe(gulp.dest(paths.output))
        .on('end', done);
});