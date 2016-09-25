// ============================================================================
// Task
// Images
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    reportError = require('./report-error.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    imagemin    = require('gulp-imagemin'),              // https://www.npmjs.com/package/gulp-imagemin
    size        = require('gulp-filesize');              // https://www.npmjs.com/package/gulp-filesize


// Tasks ----------------------------------------------------------------------
gulp.task('build-images', help.images.build, function() {
    return gulp.src(paths.images.source)
        .pipe(changed(paths.images.build))
        .pipe(gulp.dest(paths.images.build))
});


gulp.task('test-images', help.images.test, function() {
    return gulp.src(paths.images.source)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
        }))
        .pipe(gulp.dest(paths.images.test));
});
