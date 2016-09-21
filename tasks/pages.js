// ============================================================================
// Task
// Pages
// ============================================================================
var gulp          = require('gulp'),                // http://gulpjs.com/
    paths         = require('./paths.js'),
    reportError   = require('./report-error.js'),
    entityconvert = require('gulp-entity-convert'), // https://www.npmjs.com/package/gulp-entity-convert
    htmlmin       = require('gulp-html-minifier'),  // https://www.npmjs.com/package/gulp-entity-convert
    include       = require('gulp-file-include'),   // https://www.npmjs.com/package/gulp-file-include
    plumber       = require('gulp-plumber');        // https://www.npmjs.com/package/gulp-plumber


// Tasks ----------------------------------------------------------------------
// - Compiles HTML partials
// - Converts special symbols into valid HTML entities
gulp.task('buildPages', function() {
    return gulp.src(paths.pages.src)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(entityconvert())
        .pipe(gulp.dest(paths.pages.build));
});


// - Minifies HTML
gulp.task('testPages', function() {
    return gulp.src(paths.pages.test.src)
        .pipe(htmlmin({
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
            processConditionalComments: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest(paths.pages.test.dest));
});
