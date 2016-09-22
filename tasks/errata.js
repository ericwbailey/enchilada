// ============================================================================
// Task
// Errata
// ============================================================================
var gulp  = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help  = require('./help.js'),
    paths = require('./paths.js');


// Tasks ----------------------------------------------------------------------
gulp.task('errata', help.errata.parent, function() {
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
