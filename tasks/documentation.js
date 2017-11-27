// ============================================================================
// Task
// Documentation
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    changed     = require('gulp-changed'),               // https://www.npmjs.com/package/gulp-changed
    runSequence = require('run-sequence'),               // https://www.npmjs.com/package/run-sequence
    sassdoc     = require('sassdoc'),                    // http://sassdoc.com/
    kss         = require('kss'),                        // https://www.npmjs.com/package/kss

    optionsSassdoc = {
        dest: paths.documentation.sassdoc.dest,
        theme: "flippant",
        autofill: ["requires", "content"],
        verbose: true,
        display: {
            alias: true
        },
    };


// Tasks ----------------------------------------------------------------------
// Sass
gulp.task('document-sass', help.document.sass, function () {
    return gulp.src(paths.documentation.sassdoc.source)
        .pipe(changed(paths.documentation.sassdoc.dest))
        .pipe(sassdoc(optionsSassdoc));
});


// Styles
gulp.task('document-styles', help.document.styles, function () {
    return kss({
        title: "projectTitleShort | Styleguide",
        builder: paths.documentation.kss.builder,
        source: paths.documentation.kss.source,
        destination: paths.documentation.kss.dest,
        css: paths.documentation.kss.css
    });
});


// Parent
gulp.task('document', help.document.parent, function() {
    runSequence(
        'document-sass',
        'document-styles'
    );
});
