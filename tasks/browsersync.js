// Task dependencies
var gulp        = require('gulp'),
    paths       = require('./paths.js'),
    browsersync = require('browser-sync');


// Browsersync task for starting the server
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
