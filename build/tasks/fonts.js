var gulp = require('gulp');
var paths = require('../paths');

gulp.task('copy-fonts', function(){
    gulp.src([paths.fonts.ionic]).pipe(gulp.dest(paths.output + paths.fonts.out));
});