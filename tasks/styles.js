// ============================================================================
// Task
// Styles
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    autoprefix  = require('gulp-autoprefixer'),          // https://www.npmjs.com/package/gulp-autoprefixer
    browsersync = require('browser-sync'),               // http://www.browsersync.io/
    plumber     = require('gulp-plumber'),               // https://www.npmjs.com/package/gulp-plumber
    sass        = require('gulp-sass'),                  // https://www.npmjs.com/package/gulp-sass
    sourcemaps  = require('gulp-sourcemaps'),            // https://www.npmjs.com/package/gulp-sourcemaps
    stylefmt    = require('gulp-stylefmt');              // https://www.npmjs.com/package/gulp-stylefmt


// Tasks ----------------------------------------------------------------------
// - Generate sourcemaps
// - Compile auditable Sass and report if there are syntax errors
// - Generate vendor prefixes
gulp.task('build-styles', false, function () {
    return gulp.src(paths.styles.src)
        .pipe(plumber({ errorHandler: reportError }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
            errLogToConsole: true
        }))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.build))
        .pipe(browsersync.stream({ match: '**/*.css' }));
});


// - Rewrites CSS according to `.stylelintrc`
// - Compile optimized Sass
// - Generate vendor prefixes
gulp.task('test-styles', false, function () {
    return gulp.src(paths.styles.src)
        .pipe(stylefmt())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(paths.styles.test));
});
