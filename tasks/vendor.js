// ============================================================================
// Task
// Vendor
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copy jQuery from `node_modules/` to `src/vendor/jquery/`
gulp.task('vendor-jquery', false, function() {
    return gulp.src(paths.vendor.jquery.src)
        .pipe(gulp.dest(paths.vendor.jquery.dest));
});
