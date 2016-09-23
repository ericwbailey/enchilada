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
// - Copies images from `src/` to `.build/`
gulp.task('build-images', help.images.build, function() {
    return gulp.src(paths.images.source)
        .pipe(changed(paths.images.build))
        .pipe(gulp.dest(paths.images.build))
});


// - Optimizes images
// - Copies optimized images to `.test/`
gulp.task('test-images', help.images.test, function() {
    return gulp.src(paths.images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.test));
});
