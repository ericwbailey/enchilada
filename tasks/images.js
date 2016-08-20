// Task dependencies
var gulp = require('gulp');

// Copies images to `.build/`
gulp.task('dev-images', function() {
    return gulp.src('./src/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}')
        .pipe(gulp.dest('.build/'));
});


// TODO: PROD images
