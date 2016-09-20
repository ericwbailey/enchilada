// Task dependencies
var gulp = require('gulp');


// [1] Copies all remaining files to `.build/`
gulp.task('errata', function() {
    return gulp.src([
        './src/browserconfig.xml',
        './src/crossdomain.xml',
        './src/humans.txt',
        './src/manifest.json',
        './src/robots.txt'
    ]) // [1]
        .pipe(gulp.dest('.build/'));
});
