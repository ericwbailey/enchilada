// ============================================================================
// Task
// Documentation
// ============================================================================
var gulp    = require('gulp'),       // http://gulpjs.com/
    paths   = require('./paths.js'),
    sassdoc = require('sassdoc');    // http://sassdoc.com/


// Tasks ----------------------------------------------------------------------
// - Generate a Scss styleguide via SassDoc
gulp.task('document-styles', function () {
    var options = {
        dest: paths.documentation.sassdoc.dest,
        theme: "flippant",
        autofill: ["requires", "content"],
        verbose: true,
        display: {
            alias: true
        },
    };
    return gulp.src(paths.documentation.sassdoc.src)
        .pipe(sassdoc(options));
});
