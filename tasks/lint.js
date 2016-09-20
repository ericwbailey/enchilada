// Task dependencies
var gulp        = require('gulp'),
    paths       = require('./paths.js'),
    browsersync = require('browser-sync'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish');


// [1] Runs Javascript through jshint
// [2] Displays errors in a easy to parse way
gulp.task('lintScripts', function() {
    return gulp.src(paths.lint.srcScripts)
        .pipe(jshint()) // [1]
        .pipe(jshint.reporter(stylish)) // [2]
        .pipe(gulp.dest('.build/scripts'))
        .pipe(browsersync.stream({ match: '**/*.js' }));
});


gulp.task('lintStyles', function() {
    return gulp.src(paths.lint.srcScripts)
        .pipe(jshint()) // [1]
        .pipe(jshint.reporter(stylish)) // [2]
        .pipe(gulp.dest('.build/scripts'))
        .pipe(browsersync.stream({ match: '**/*.js' }));
});
