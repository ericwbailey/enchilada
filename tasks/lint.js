// ============================================================================
// Task
// Lint
// ============================================================================
var gulp        = require('gulp'),           // http://gulpjs.com/
    paths       = require('./paths.js'),
    jshint      = require('gulp-jshint'),    // https://www.npmjs.com/package/gulp-jshint
    stylelint   = require('gulp-stylelint'), // https://www.npmjs.com/package/gulp-stylelint
    stylish     = require('jshint-stylish'); // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
// [1] Runs Javascript through jshint
// [2] Displays errors in a easy to parse way
gulp.task('lintScripts', function() {
    return gulp.src(paths.lint.scripts)
        .pipe(jshint()) // [1]
        .pipe(jshint.reporter(stylish)); // [2]
});


gulp.task('lintStyles', function() {
    return gulp.src(paths.lint.styles)
        .pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});
