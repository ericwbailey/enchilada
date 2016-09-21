// ============================================================================
// Task
// Scripts
// ============================================================================
var gulp        = require('gulp'),              // http://gulpjs.com/
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    concat      = require('gulp-concat'),       // https://www.npmjs.com/package/gulp-concat
    plumber     = require('gulp-plumber'),      // https://www.npmjs.com/package/gulp-plumber
    size        = require('gulp-filesize'),     // https://www.npmjs.com/package/gulp-filesize
    uglify      = require('gulp-uglify');       // https://www.npmjs.com/package/gulp-uglify


// Tasks ----------------------------------------------------------------------
// - Collect JavaScript files and combine into one main file
// - Copy main file to `.build/`
gulp.task('build-scripts', function () {
    return gulp.src(paths.scripts.src)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.build));
});


// - Optimizes scripts
// - Copies them to `.test/scripts/`
gulp.task('test-scripts', function () {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.test));
});


// - Optimizes scripts
// - Copies them to `.test/scripts/`
gulp.task('deploy-scripts', function () {
    return gulp.src(paths.scripts.deploy.src)
        .pipe(gulp.dest(paths.scripts.deploy.dest));
});
