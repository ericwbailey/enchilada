// Task dependencies
var gulp        = require('gulp'),
    paths       = require('./paths.js'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    reportError = require('./report-error.js'),
    size        = require('gulp-filesize'),
    uglify      = require('gulp-uglify');


// Copy scripts
gulp.task('buildScripts', function () {
    return gulp.src(paths.scripts.src)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(size())
        .pipe(gulp.dest(paths.scripts.build));
});


// TODO: PROD scripts
