// Task dependencies
var gulp        = require('gulp'),
    paths       = require('./paths.js')
    reportError = require('./report-error.js');


// Copies images to `.build/`
gulp.task('buildImages', function() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.build));
});


// TODO: PROD images
