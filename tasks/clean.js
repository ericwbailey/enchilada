// Task dependencies
var gulp  = require('gulp'),
	del   = require('del'),
    paths = require('./paths.js');


// Deletes all generated files
gulp.task('clean', function(cb) {
    del([
        paths.clean.build,
        paths.clean.test,
        paths.clean.deploy,
		paths.clean.documentation
    ]).then(function() {
        cb();
    });
});


// Cleans `.build/` and all files and subfolders
gulp.task('cleanBuild', function(cb) {
    del(paths.clean.build).then(function() {
        cb();
    });
});

// Cleans `.build/images/` and all files and subfolders
gulp.task('cleanBuildImages', function(cb) {
    del(paths.clean.buildImages).then(function() {
        cb();
    });
});

// Cleans `test/`
gulp.task('cleanTest', function(cb) {
    del(paths.clean.test).then(function() {
        cb();
    });
});

// Cleans `docs/`
gulp.task('cleanDeploy', function(cb) {
    del(paths.clean.deploy).then(function() {
        cb();
    });
});

// Cleans `documentation/`
gulp.task('cleanDocumentation', function(cb) {
    del(paths.clean.documentation).then(function() {
        cb();
    });
});
