// Task dependencies
var gulp    = require('gulp');
var sassdoc = require('sassdoc');


gulp.task('sassdoc', function () {
  var options = {
    dest: './documentation/styles',
    theme: "flippant",
    autofill: ["requires", "content"],
    verbose: true,
    display: {
      alias: true
    },
  };

  return gulp.src('./src/**/*.scss')
    .pipe(sassdoc(options));
});
