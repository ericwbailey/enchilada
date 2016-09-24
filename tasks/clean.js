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
// Build
gulp.task('clean-build', help.clean.root, function(cb) {
    del(paths.clean.build.root).then(function() {
        cb();
    });
});

gulp.task('clean-build-images', help.clean.images, function(cb) {
    del(paths.clean.build.images).then(function() {
        cb();
    });
});

gulp.task('clean-build-scripts', help.clean.scripts, function(cb) {
    del(paths.clean.build.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-build-static', help.clean.static, function(cb) {
    del(paths.clean.build.static).then(function() {
        cb();
    });
});

gulp.task('clean-build-styles', help.clean.styles, function(cb) {
    del(paths.clean.build.styles).then(function() {
        cb();
    });
});


// Test
gulp.task('clean-test', help.clean.root, function(cb) {
    del(paths.clean.test.root).then(function() {
        cb();
    });
});

gulp.task('clean-test-images', help.clean.images, function(cb) {
    del(paths.clean.test.images).then(function() {
        cb();
    });
});

gulp.task('clean-test-scripts', help.clean.scripts, function(cb) {
    del(paths.clean.test.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-test-static', help.clean.static, function(cb) {
    del(paths.clean.test.static).then(function() {
        cb();
    });
});

gulp.task('clean-test-styles', help.clean.styles, function(cb) {
    del(paths.clean.test.styles).then(function() {
        cb();
    });
});


// Deploy
gulp.task('clean-deploy', help.clean.root, function(cb) {
    del(paths.clean.deploy.root).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-images', help.clean.images, function(cb) {
    del(paths.clean.deploy.images).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-scripts', help.clean.scripts, function(cb) {
    del(paths.clean.deploy.scripts).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-static', help.clean.static, function(cb) {
    del(paths.clean.deploy.static).then(function() {
        cb();
    });
});

gulp.task('clean-deploy-styles', help.clean.styles, function(cb) {
    del(paths.clean.deploy.styles).then(function() {
        cb();
    });
});


// Documentation
gulp.task('clean-documentation', help.clean.documentation.root, function(cb) {
    del(paths.clean.documentation.root).then(function() {
        cb();
    });
});

gulp.task('clean-documentation-styles', help.clean.documentation.styles, function(cb) {
    del(paths.clean.documentation.styles).then(function() {
        cb();
    });
});
