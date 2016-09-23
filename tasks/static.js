// ============================================================================
// Task
// Static
// ============================================================================
var gulp    = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help    = require('./help.js'),
    paths   = require('./paths.js'),
    changed = require('gulp-changed');               // https://www.npmjs.com/package/gulp-changed


// Tasks ----------------------------------------------------------------------
gulp.task('build-static', help.static.build, function() {
    return gulp.src(paths.static.source)
    .pipe(changed(paths.static.build))
    .pipe(gulp.dest(paths.static.build));
});


gulp.task('test-static', help.static.test, function() {
    return gulp.src(paths.static.source)
    .pipe(gulp.dest(paths.static.test));
});
