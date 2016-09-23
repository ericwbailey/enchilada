// ============================================================================
// Task
// Vendor
// ============================================================================
var gulp    = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help    = require('./help.js'),
    paths   = require('./paths.js'),
    changed = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed


// Tasks ----------------------------------------------------------------------
gulp.task('vendor-jquery', help.vendor.jquery, function() {
    return gulp.src(paths.vendor.jquery.source)
        .pipe(changed(paths.vendor.jquery.dest))
        .pipe(gulp.dest(paths.vendor.jquery.dest));
});
