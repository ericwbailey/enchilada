// ============================================================================
// Task
// Clean
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    paths       = require('./paths.js'),
	del         = require('del'),                        // https://www.npmjs.com/package/del
	runSequence = require('run-sequence');               // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
// - Deletes `.build/` and all its files and subfolders
gulp.task('clean-build', false, function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

// - Deletes `.build/images/` and all its files and subfolders
gulp.task('clean-build-images', false, function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});


// - Deletes `.test/` and all its files and subfolders
gulp.task('clean-test', false, function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

// - Deletes `.test/images/` and all its files and subfolders
gulp.task('clean-test-images', false, function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});


// - Deletes `docs/` and all its files and subfolders
gulp.task('clean-deploy', false, function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});

// - Deletes `docs/images/` and all its files and subfolders
gulp.task('clean-deploy-images', false, function(cb) {
    del(paths.clean.deploy.images).then(function() {
        cb();
    });
});


// - Deletes `documentation/` and all its files and subfolders
gulp.task('clean-documentation', false, function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

// - Deletes `documentation/styles/` and all its files and subfolders
gulp.task('clean-documentation-styles', false, function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});
