var gulp = require('gulp');
var del  = require('del');

// Deletes all generated files
gulp.task('clean', function(cb) {
	del(['.build/**', 'dist/**']).then(function() {
		cb();
	});
});
