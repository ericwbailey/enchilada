// Task dependencies
var gulp  = require('gulp'),
    paths = require('./paths.js');


// Copy jQuery from `node_modules/`
gulp.task('vendorJquery', function() {
    return gulp.src(paths.vendor.srcJquery)
        .pipe(gulp.dest(paths.vendor.buildJquery));
});
