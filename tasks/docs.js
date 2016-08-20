// Task dependencies
var gulp    = require('gulp'),
    htmlmin = require('htmlmin'),
    include = require('gulp-file-include'),
    plumber = require('gulp-plumber');

// [1] Gathers documents
// [2] Adds includes to collected documents
gulp.task('dev-docs', function() {
    return gulp.src('./src/*.html') // [1]
        .pipe(plumber())
        .pipe(include({
            prefix: '@@',
            basepath: '@file'
        })) // [2]
        // .pipe(htmlmin({
        //     collapseInlineTagWhitespace: true,
        //     collapseWhitespace: true,
        //     keepClosingSlash: true,
        //     removeComments: true,
        //     removeEmptyAttributes: true,
        //     sortAttributes: true,
        //     sortClassName: true
        // }))
        .pipe(gulp.dest('.build/'));
});


// TODO: PROD docs
