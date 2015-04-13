var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: paths.output
        },
        files: [paths.output + '*']
    });
});