// ============================================================================
// Task
// Styles
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    autoprefix  = require('gulp-autoprefixer'),          // https://www.npmjs.com/package/gulp-autoprefixer
    browsersync = require('browser-sync'),               // http://www.browsersync.io/
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    sass        = require('gulp-sass'),                  // https://www.npmjs.com/package/gulp-sass
    sourcemaps  = require('gulp-sourcemaps'),            // https://www.npmjs.com/package/gulp-sourcemaps
    stylefmt    = require('gulp-stylefmt');              // https://www.npmjs.com/package/gulp-stylefmt


// Tasks ----------------------------------------------------------------------
gulp.task('build-styles', help.styles.build, function () {
    return gulp.src(paths.styles.source)
        .pipe(changed(paths.styles.build))
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
            errLogToConsole: true
        }))
        .pipe(autoprefix({
            browsers: ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browsersync.stream({ match: '**/*.css' })); // TODO: Do I need this
});


gulp.task('test-styles', help.styles.test, function () {
    return gulp.src(paths.styles.source)
        .pipe(stylefmt())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(paths.styles.test));
});
