// ============================================================================
// Task
// Default
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// - Default task to be run with `gulp`
gulp.task('default', ['build'], function() {
    gulp.watch(paths.styles.watch, ['build-styles']);
    gulp.watch(paths.pages.watch, ['build-pages']);
    gulp.watch(paths.scripts.watch, ['build-scripts']);
    gulp.watch(paths.images.watch, ['build-images']);
    gulp.watch(paths.browsersync.watch, ['browsersyncReload']);
    //TODO: Assets gulp.watch('src/assets/**/*', ['assets-dev']);
});


// - Deletes all generated files
gulp.task('clean', help.clean, function() {
    runSequence(
        'clean-build',
        'clean-test',
        'clean-deploy',
        'clean-documentation'
    );
});


// - Copies vendor files
gulp.task('vendor', help.vendor, function() {
    runSequence(
        'vendor-jquery'
    );
});


// - Generates development site
gulp.task('build', help.build, function() {
    runSequence(
        'clean-build',
        'vendor',
        'build-pages',
        'build-styles',
        'build-scripts',
        'build-static',
        'errata',
        'build-images',
        'browsersync'
    );
});


// TODO: test


// TODO: deploy
