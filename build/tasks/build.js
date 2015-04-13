var gulp = require('gulp');
var runSequence = require('run-sequence');

// builds system
gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['sass', 'scripts', 'bundle-libs', 'copy-fonts'],
        'build-html',
        callback
    );
});