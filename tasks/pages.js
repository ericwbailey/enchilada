// Task dependencies
var gulp          = require('gulp'),
    paths         = require('./paths.js'),
    entityconvert = require('gulp-entity-convert');
    htmlmin       = require('htmlmin'),
    include       = require('gulp-file-include'),
    plumber       = require('gulp-plumber'),
    reportError   = require('./report-error.js');


gulp.task('buildPages', function() {
    return gulp.src(paths.pages.src) // [1]
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        })) // [2]
        .pipe(entityconvert()) // [3]
        .pipe(gulp.dest(paths.pages.build));
});


gulp.task('testPages', function() {
    return gulp.src(paths.pages.src) // [1]
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        })) // [2]
        .pipe(htmlmin({
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeRedundantAttributes: true,
            sortAttributes: true,
            sortClassName: true
        }))
        .pipe(gulp.dest(paths.pages.test));
});
