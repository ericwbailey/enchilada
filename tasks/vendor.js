// ============================================================================
// Task
// Vendor
// ============================================================================
var gulp  = require('gulp'),       // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copy jQuery from `node_modules/` to `src/vendor/jquery/`
gulp.task('vendor-jquery', function() {
    return gulp.src(paths.vendor.jquery.src)
        .pipe(gulp.dest(paths.vendor.jquery.dest));
});
