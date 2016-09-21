// ============================================================================
// Task
// Static
// ============================================================================
var gulp  = require('gulp'),       // // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
gulp.task('buildStatic', function() {
    return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.build));
});

gulp.task('testStatic', function() {
    return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.test));
});
