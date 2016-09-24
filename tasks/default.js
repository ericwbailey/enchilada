// ============================================================================
// Task
// Default
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    sync        = require('gulp-npm-script-sync');       // https://www.npmjs.com/package/gulp-npm-script-sync


// Tasks ----------------------------------------------------------------------
gulp.task('default', ['build'], function() {
    gulp.watch(paths.styles.watch, ['build-styles']);
    gulp.watch(paths.pages.watch, ['build-pages']);
    gulp.watch(paths.scripts.watch, ['build-scripts']);
    gulp.watch(paths.images.watch, ['build-images']);
    gulp.watch(paths.browsersync.watch, ['browsersync-reload']);
    //TODO: Assets gulp.watch('src/assets/**/*', ['assets-dev']);
});


gulp.task('document', help.document.parent, function() {
    runSequence(
        'document-styles'
    );
});


gulp.task('clean', help.clean.parent, function() {
    runSequence(
        'clean-build',
        'clean-test',
        'clean-deploy',
        'clean-documentation'
    );
});


gulp.task('lint', help.lint.parent, function() {
    runSequence(
        'lint-scripts',
        'lint-styles'
    );
});


gulp.task('vendor', help.vendor.parent, function() {
    runSequence(
        'vendor-jquery'
    );
});


gulp.task('build', help.build.parent, function() {
    runSequence(
        'clean-build',
        'vendor',
        'errata',
        'build-pages',
        'build-styles',
        'build-scripts',
        'build-static',
        'build-images',
        'browsersync'
    );
});


// TODO: test


// TODO: deploy




// Turns Gulp tasks into NPM scripts in `package.json`
sync(gulp);
