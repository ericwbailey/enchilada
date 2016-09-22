// ============================================================================
// Task
// Pages
// ============================================================================
var gulp          = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help          = require('./help.js'),
    paths         = require('./paths.js'),
    reportError   = require('./report-error.js'),
    entityconvert = require('gulp-entity-convert'),        // https://www.npmjs.com/package/gulp-entity-convert
    htmlmin       = require('gulp-html-minifier'),         // https://www.npmjs.com/package/gulp-entity-convert
    include       = require('gulp-file-include'),          // https://www.npmjs.com/package/gulp-file-include
    plumber       = require('gulp-plumber');               // https://www.npmjs.com/package/gulp-plumber


// Tasks ----------------------------------------------------------------------
gulp.task('build-pages', help.pages.build, function() {
    return gulp.src(paths.pages.source)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(entityconvert())
        .pipe(gulp.dest(paths.pages.build));
});


gulp.task('test-pages', help.pages.test, function() {
    return gulp.src(paths.pages.test.source)
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
