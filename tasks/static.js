// ============================================================================
// Task
// Static
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copies static files and subfolders to `.build/`
gulp.task('build-static', false, function() {
    return gulp.src(paths.static.source)
    .pipe(gulp.dest(paths.static.build));
});


// - Copies static files and subfolders to `.test/`
gulp.task('test-static', false, function() {
    return gulp.src(paths.static.source)
    .pipe(gulp.dest(paths.static.test));
});
