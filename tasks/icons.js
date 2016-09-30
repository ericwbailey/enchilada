// ============================================================================
// Task
// Icons
// ============================================================================
var gulp     = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help     = require('./help.js'),
    paths    = require('./paths.js'),
    rename   = require("gulp-rename"),                // https://www.npmjs.com/package/gulp-rename
    svgstore = require('gulp-svgstore');              // https://www.npmjs.com/package/gulp-svgstore


// Tasks ----------------------------------------------------------------------
gulp.task('icon-sprite', help.icons.parent, function() {
    return gulp.src(paths.icons.source)
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename({
            basename: 'icon-sprite'
        }))
        .pipe(gulp.dest(paths.icons.dest))
});
