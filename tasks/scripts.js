// Task dependencies
var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify  = require('gulp-uglify');

// Copy scripts
gulp.task('dev-scripts', function () {
    return gulp.src('./src/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('.build/scripts'));
});


// TODO: PROD scripts
