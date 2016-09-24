// ============================================================================
// Task
// Scripts
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    concat      = require('gulp-concat'),                // https://www.npmjs.com/package/gulp-concat
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    size        = require('gulp-filesize'),              // https://www.npmjs.com/package/gulp-filesize
    uglify      = require('gulp-uglify');                // https://www.npmjs.com/package/gulp-uglify


// Tasks ----------------------------------------------------------------------
gulp.task('build-scripts', help.scripts.build, function () {
    return gulp.src(paths.scripts.source)
        .pipe(changed(paths.scripts.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.build));
});


gulp.task('test-scripts', help.scripts.build, function () {
    return gulp.src(paths.scripts.source)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.test));
});
