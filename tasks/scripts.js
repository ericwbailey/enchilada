// ============================================================================
// Task
// Scripts
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    concat      = require('gulp-concat'),                // https://www.npmjs.com/package/gulp-concat
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    size        = require('gulp-filesize'),              // https://www.npmjs.com/package/gulp-filesize
    uglify      = require('gulp-uglify');                // https://www.npmjs.com/package/gulp-uglify


// Tasks ----------------------------------------------------------------------
// - Collect JavaScript files and combine into one main file
// - Copy main file to `.build/`
gulp.task('build-scripts', false, function () {
    return gulp.src(paths.scripts.source)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.build));
});


// - Optimizes scripts
// - Copies them to `.test/scripts/`
gulp.task('test-scripts', false, function () {
    return gulp.src(paths.scripts.source)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.test));
});


// - Optimizes scripts
// - Copies them to `.test/scripts/`
gulp.task('deploy-scripts', false, function () {
    return gulp.src(paths.scripts.deploy.source)
        .pipe(gulp.dest(paths.scripts.deploy.dest));
});
