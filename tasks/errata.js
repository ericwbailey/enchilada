// ============================================================================
// Task
// Errata
// ============================================================================
var gulp  = require('gulp'),       //http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copies all remaining files to `.build/`
gulp.task('errata', function() {
    return gulp.src([
        paths.errata.src + 'browserconfig.xml',
        paths.errata.src + 'crossdomain.xml',
        paths.errata.src + 'humans.txt',
        paths.errata.src + 'manifest.json',
        paths.errata.src + 'robots.txt'
    ])
        .pipe(gulp.dest(paths.errata.build));
});

// TODO: test errata
