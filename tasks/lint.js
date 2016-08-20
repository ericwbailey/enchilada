// Task dependencies
var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish');

// [1] Runs Javascript through jshint
// [2] Displays errors in a easy to parse way
gulp.task('lint-scripts', function() {
    return gulp.src(['./src/*.js', '!./src/vendor/**/*.js'])
        .pipe(jshint()) // [1]
        .pipe(jshint.reporter(stylish)) // [2]
        .pipe(gulp.dest('.build/scripts'))
        .pipe(browserSync.stream({ match: '**/*.js' }));
});
