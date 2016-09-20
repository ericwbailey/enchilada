// Task dependencies
var gulp    = require('gulp'),
    paths   = require('./paths.js'),
    sassdoc = require('sassdoc');


gulp.task('documentStyles', function () {
    var options = {
        dest: paths.documentation.buildSassdoc,
        theme: "flippant",
        autofill: ["requires", "content"],
        verbose: true,
        display: {
            alias: true
        },
    };
    return gulp.src(paths.documentation.srcSassdoc)
        .pipe(sassdoc(options));
});
