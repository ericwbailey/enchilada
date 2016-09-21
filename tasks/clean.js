// ============================================================================
// Task
// Clean
// ============================================================================
var gulp        = require('gulp'),         // http://gulpjs.com/
    paths       = require('./paths.js'),
	del         = require('del'),          // https://www.npmjs.com/package/del
	runSequence = require('run-sequence'); // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
// - Deletes `.build/` and all its files and subfolders
gulp.task('cleanBuild', function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

// - Deletes `.build/images/` and all its files and subfolders
gulp.task('cleanBuildImages', function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});


// - Deletes `.test/` and all its files and subfolders
gulp.task('cleanTest', function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

// - Deletes `.test/images/` and all its files and subfolders
gulp.task('cleanTestImages', function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});


// - Deletes `docs/` and all its files and subfolders
gulp.task('cleanDeploy', function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});

// - Deletes `docs/images/` and all its files and subfolders
gulp.task('cleanDeployImages', function(cb) {
    del(paths.clean.deploy.images).then(function() {
        cb();
    });
});


// - Deletes `documentation/` and all its files and subfolders
gulp.task('cleanDocumentation', function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

// - Deletes `documentation/styles/` and all its files and subfolders
gulp.task('cleanDocumentationStyles', function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});
