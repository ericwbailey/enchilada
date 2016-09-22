// ============================================================================
// Task
// Static
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help  = require('./help.js'),
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
gulp.task('build-static', help.static.build, function() {
    return gulp.src(paths.static.source)
    .pipe(gulp.dest(paths.static.build));
});


gulp.task('test-static', help.static.test, function() {
    return gulp.src(paths.static.source)
    .pipe(gulp.dest(paths.static.test));
});
