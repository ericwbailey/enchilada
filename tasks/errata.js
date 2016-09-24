// ============================================================================
// Task
// Errata
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help  = require('./help.js'),
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
gulp.task('build-errata', help.errata.parent, function() {
    return gulp.src(paths.errata.source)
        .pipe(gulp.dest(paths.errata.build));
});


gulp.task('test-errata', help.errata.parent, function() {
    return gulp.src(paths.errata.source)
        .pipe(gulp.dest(paths.errata.test));
});
