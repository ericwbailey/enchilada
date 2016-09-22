// ============================================================================
// Task
// BrowserSync
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    browsersync = require('browser-sync');               // https://www.browsersync.io/


// Tasks ----------------------------------------------------------------------
// - Launches the site in your default browser
// - Updates when source files are saved
gulp.task('browsersync', help.browsersync, function() {
    browsersync({
        server: {
            baseDir: paths.browsersync.basedir,
            index: paths.browsersync.index
        },
        minify: false,
        notify: false,
        logPrefix: "$$projectShortTitle"
    });
});

// - Reloads BrowserSync
gulp.task('browsersyncReload', false, function() {
    browsersync.reload();
});
