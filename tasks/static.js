// ============================================================================
// Task
// Static
// ============================================================================
var gulp  = require('gulp'),       // // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copies static files and subfolders to `.build/`
gulp.task('buildStatic', function() {
    return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.build));
});


// - Copies static files and subfolders to `.test/`
gulp.task('testStatic', function() {
    return gulp.src(paths.static.src)
    .pipe(gulp.dest(paths.static.test));
});
