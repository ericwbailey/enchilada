// ============================================================================
// Task
// Documentation
// ============================================================================
var gulp    = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help    = require('./help.js'),
    paths   = require('./paths.js'),
    sassdoc = require('sassdoc');                    // http://sassdoc.com/


// Tasks ----------------------------------------------------------------------
gulp.task('document-styles', help.document.styles, function () {
    var options = {
        dest: paths.documentation.sassdoc.dest,
        theme: "flippant",
        autofill: ["requires", "content"],
        verbose: true,
        display: {
            alias: true
        },
    };
    return gulp.src(paths.documentation.sassdoc.source)
        .pipe(sassdoc(options));
});
