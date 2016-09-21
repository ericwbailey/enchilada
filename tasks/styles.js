// ============================================================================
// Task
// Styles
// ============================================================================
var gulp        = require('gulp'),              // http://gulpjs.com/
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    autoprefix  = require('gulp-autoprefixer'), // https://www.npmjs.com/package/gulp-autoprefixer
    browsersync = require('browser-sync'),      // http://www.browsersync.io/
    plumber     = require('gulp-plumber'),      // https://www.npmjs.com/package/gulp-plumber
    sass        = require('gulp-sass'),         // https://www.npmjs.com/package/gulp-sass
    sourcemaps  = require('gulp-sourcemaps');   // https://www.npmjs.com/package/gulp-sourcemaps


// Tasks ----------------------------------------------------------------------
// [1] Compile Sass
// [2] Autoprefix properties
// [3] Add soucemaps
// [4] Refresh changes in the browser
gulp.task('buildStyles', function () {
    return gulp.src(paths.styles.src)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
            errLogToConsole: true
        })) // [1]
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        })) // [2]
        .pipe(sourcemaps.write()) // [3]
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browsersync.stream({ match: '**/*.css' })); // [4]
});


gulp.task('testStyles', function () {
    return gulp.src(paths.styles.src)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(paths.styles.test));
});
