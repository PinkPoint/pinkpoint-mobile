var gulp = require('gulp');
var runSequence = require('run-sequence');

// builds system
gulp.task('watch', function(callback) {
    return runSequence(
        'clean',
        'bundle-libs',
        ['watch-sass', 'watch-scripts', 'copy-fonts'],
        'watch-html',
        'serve',
        callback
    );
});