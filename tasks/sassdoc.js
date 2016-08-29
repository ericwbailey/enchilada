// Task dependencies
var gulp    = require('gulp');
var sassdoc = require('sassdoc');


gulp.task('sassdoc', function () {
  var options = {
    dest: './documentation/styles',
    theme: "flippant",
    verbose: true,
    display: {
      alias: true,
      watermark: true,
    },
  };

  return gulp.src('./src/**/*.scss')
    .pipe(sassdoc(options));
});
