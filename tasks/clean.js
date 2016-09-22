// ============================================================================
// Task
// Clean
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
	del         = require('del'),                        // https://www.npmjs.com/package/del
	runSequence = require('run-sequence');               // http://gulpjs.com/


// Tasks ----------------------------------------------------------------------
gulp.task('clean-build', help.clean.build, function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

gulp.task('clean-build-images', help.clean.buildImages, function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});


gulp.task('clean-test', help.clean.test, function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

gulp.task('clean-test-images', help.clean.testImages, function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});


gulp.task('clean-deploy', help.clean.deploy, function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});


gulp.task('clean-documentation', help.clean.documentation, function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

gulp.task('clean-documentation-styles', help.clean.documentationStyles, function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});
