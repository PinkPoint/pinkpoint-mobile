var gulp = require("gulp");
var gutil = require('gulp-util');
var paths = require('../paths');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return scripts(false);
});

gulp.task('watch-scripts', function() {
    return scripts(true);
});

function scripts(watch) {
    var bundler, rebundle;
    bundler = browserify(paths.mainFile.src, watchify.args);

    if(watch) {
        bundler = watchify(bundler);
    }

    bundler.transform(babelify);

    rebundle = function() {
        return bundler.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(paths.mainFile.out))
            .pipe(gulp.dest(paths.output));
    };

    bundler.on('update', rebundle);
    return rebundle();
}

gulp.task("bundle-libs", function () {
    return gulp.src(paths.libs.src)
        .pipe(concat(paths.libs.out))
        .pipe(gulp.dest(paths.output));
});