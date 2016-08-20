// Task dependencies
var gulp        = require('gulp'),
    autoprefix  = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    plumber     = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps');

// [1] Compile Sass
// [2] Autoprefix properties
// [3] Add soucemaps
// [4] Refresh changes in the browser
gulp.task('dev-styles', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact',
            errLogToConsole: true
        })) // [1]
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        })) // [2]
        .pipe(sourcemaps.write()) // [3]
        .pipe(gulp.dest('.build/styles'))
        .pipe(browserSync.stream({ match: '**/*.css' })); // [4]
});


// TODO: PROD styles
