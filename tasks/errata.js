// ============================================================================
// Task
// Errata
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
// - Copies all remaining files to `.build/`
gulp.task('errata', false, function() {
    return gulp.src([
        paths.errata.source + 'browserconfig.xml',
        paths.errata.source + 'crossdomain.xml',
        paths.errata.source + 'humans.txt',
        paths.errata.source + 'manifest.json',
        paths.errata.source + 'robots.txt'
    ])
        .pipe(gulp.dest(paths.errata.build));
});

// TODO: test errata
