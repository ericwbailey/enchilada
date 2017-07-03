// ============================================================================
// Task
// Vendor
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    rename      = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    runSequence = require('run-sequence');               // https://www.npmjs.com/package/run-sequence


// Tasks ----------------------------------------------------------------------
// Accessible HTML Conent Patterns
gulp.task('vendor-accessiblehtml', help.vendor.accessiblehtml, function() {
    return gulp.src(paths.vendor.accessiblehtml.source)
        .pipe(rename({
            basename: 'element-patterns',
            extname: ".hbs"
        }))
        .pipe(gulp.dest(paths.vendor.accessiblehtml.dest));
});


// Sass Component Template
gulp.task('vendor-styled-component-template', help.vendor.styledcomponenttemplate, function() {
    return gulp.src(paths.vendor.styledComponentTemplate.source)
        .pipe(rename({
            basename: '_c-component',
        }))
        .pipe(gulp.dest(paths.vendor.styledComponentTemplate.dest));
});


// Parent
gulp.task('vendor', help.vendor.parent, function() {
    runSequence(
        'vendor-accessiblehtml',
        'vendor-styled-component-template'
    );
});
