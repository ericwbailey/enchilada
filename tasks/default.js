// Task dependencies
var gulp        = require('gulp'),
    paths       = require('./paths.js'),
    runSequence = require('run-sequence');


// Default task to be run with `gulp`
gulp.task('default', ['build'], function() {
    // TODO: copy vendor
    gulp.watch(paths.styles.watch, ['buildStyles']);
    gulp.watch(paths.images.watch, ['buildImages']);
    gulp.watch(paths.paths.watch, ['buildPages']);
    //gulp.watch('src/js/**/*.js', ['js-dev']);
    //gulp.watch('src/assets/**/*', ['assets-dev']);
    gulp.watch('./.build/dev/index.html', ['browsersyncReload']);
});

gulp.task('build', function() {
    runSequence(
        'vendorJquery',
        'buildStyles',
        //'js-dev',
        //'assets-dev',
        'buildImages',
        'buildPages'
        //'browsersync' // do I need this
    );
});
