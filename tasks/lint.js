// ============================================================================
// Task
// Lint
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths       = require('./paths.js'),
    jshint      = require('gulp-jshint'),                // https://www.npmjs.com/package/gulp-jshint
    stylelint   = require('gulp-stylelint'),             // https://www.npmjs.com/package/gulp-stylelint
    stylish     = require('jshint-stylish');             // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
// - Checks JavaScript for issues
gulp.task('lint-scripts', false, function() {
    return gulp.src(paths.lint.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// - Checks Sass for issues
gulp.task('lint-styles', false, function() {
    return gulp.src(paths.lint.styles)
        .pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});
