// ============================================================================
// Task
// Default
// ============================================================================
var gulp        = require('gulp'),         // http://gulpjs.com/
    paths       = require('./paths.js'),
    runSequence = require('run-sequence'); // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// - Default task to be run with `gulp`
gulp.task('default', ['build'], function() {
    gulp.watch(paths.styles.watch, ['buildStyles']);
    gulp.watch(paths.pages.watch, ['buildPages']);
    gulp.watch(paths.scripts.watch, ['buildScripts']);
    gulp.watch(paths.images.watch, ['buildImages']);
    gulp.watch(paths.browsersync.watch, ['browsersyncReload']);
    //TODO: Assets gulp.watch('src/assets/**/*', ['assets-dev']);
});


// - Deletes all generated files
gulp.task('clean', function() {
    runSequence(
        'cleanBuild',
        'cleanTest',
        'cleanDeploy',
        'cleanDocumentation'
    );
});


// - Copies vendor files
gulp.task('vendor', function() {
    runSequence(
        'vendorJquery'
    );
});


// - Generates development site
gulp.task('build', function() {
    runSequence(
        'cleanBuild',
        'vendor',
        'buildPages',
        'buildStyles',
        'buildScripts',
        'buildStatic',
        'errata',
        'buildImages',
        'browsersync'
    );
});
