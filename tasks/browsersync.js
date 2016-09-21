// ============================================================================
// Task
// BrowserSync
// ============================================================================
var gulp        = require('gulp'),         // http://gulpjs.com/
    paths       = require('./paths.js'),
    browsersync = require('browser-sync'); // https://www.browsersync.io/


// Tasks ----------------------------------------------------------------------
gulp.task('browsersync', function() {
    browsersync({
        server: {
            baseDir: '.build/',
            index: 'index.html'
        },
        minify: false,
        notify: false,
        logPrefix: "$$projectShortTitle"
    });
});

gulp.task('browsersyncReload', function() {
    browsersync.reload();
});
