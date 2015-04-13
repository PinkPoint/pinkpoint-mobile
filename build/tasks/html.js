var gulp = require('gulp');
var paths = require('../paths');
var inject = require('gulp-inject');
var series = require('stream-series');

gulp.task('build-html', ['copy-template'], function () {
    var target = gulp.src(paths.html.index);

    var vendorStream = gulp.src(paths.output + paths.libs.out, {read: false});
    var appStream = gulp.src(paths.output + paths.mainFile.out, {read: false});
    var styleStream = gulp.src(paths.output + paths.style.out, {read: false});


    return target.pipe(inject(series(vendorStream, appStream, styleStream), {ignorePath: paths.output, addRootSlash: false}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('copy-template', function(){
    gulp.src([paths.html.watch, '!' + paths.html.index]).pipe(gulp.dest(paths.output));
});

gulp.task('watch-html', ['build-html'], function(){
    gulp.watch([paths.html.watch], ['build-html']);
});