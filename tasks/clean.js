// ============================================================================
// Task
// Clean
// ============================================================================
var gulp        = require('gulp'),         // http://gulpjs.com/
    paths       = require('./paths.js'),
	del         = require('del'),          // https://www.npmjs.com/package/del
	runSequence = require('run-sequence'); // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
// Cleans `.build/` and all files and subfolders
gulp.task('cleanBuild', function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

// Cleans `.build/images/` and all files and subfolders
gulp.task('cleanBuildImages', function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});


// Cleans `test/`
gulp.task('cleanTest', function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

// Cleans `test/images/` and all files and subfolders
gulp.task('cleanTestImages', function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});


// Cleans `docs/`
gulp.task('cleanDeploy', function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});

// Cleans `docs/images/`
gulp.task('cleanDeployImages', function(cb) {
    del(paths.clean.deploy.images).then(function() {
        cb();
    });
});


// Cleans `documentation/`
gulp.task('cleanDocumentation', function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

// Cleans `documentation/styles/`
gulp.task('cleanDocumentationStyles', function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});
