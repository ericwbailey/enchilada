// ============================================================================
// Task
// Responsive Images
// ============================================================================
var gulp    = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help    = require('./help.js'),
    paths   = require('./paths.js'),
    gm      = require('gulp-gm'),
    gulpif  = require('gulp-if'),                    // https://www.npmjs.com/package/gulp-if
    rename  = require("gulp-rename");                // https://www.npmjs.com/package/gulp-rename


// Tasks ----------------------------------------------------------------------
gulp.task('responsive', false, function() {
    return gulp.src('./source/**/*-fullsize.jpg')
        .pipe(gm(function (gmfile) {
            return gmfile.setFormat('jpg'),
                   gmfile.resample(72, 72),
                   gmfile.thumbnail(800),
                   gmfile.quality(82),
                   gmfile.filter('triangle'),
                   gmfile.unsharp('0.25x0.25+8+0.065'),
                   gmfile.interlace('none'),
                   gmfile.colorspace('sRGB');
                   //gmfile.crop(1400, 824, 0, 0);
            },
            {
              imageMagick: true
            }))
            //.pipe($.if('**/*.jpg', $.rename({basename: 'newFileName'})))
            // .pipe(gulpif('**/*.jpg', rename({suffix: '-palm', prefix: 'arglebargle-'})))
        //    .pipe(replace('-fullsize', '-palm'))
            .pipe(rename(function (path) {
                path.basename = `arglebargle-${path.basename.replace(/-fullsize$/, '')}-palm`;
            }))
        .pipe(gulp.dest('./foobar/'))
});
