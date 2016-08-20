// Task dependencies
// TODO: Update me
var gulp = require('gulp');

// Copy jQuery from node_modules/
gulp.task('jquery', function() {
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(tmpPath + '/scripts/vendor'));
});
