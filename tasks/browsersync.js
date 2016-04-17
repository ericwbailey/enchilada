var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Browsersync task for starting the server
gulp.task('browsersync', function() {
	browserSync({
		server: {
			baseDir: 'build/',
			index: 'index.html'
		},
		minify: false,
		notify: false,
		logPrefix: "$$projectShortTitle"
	});
});

gulp.task('browsersync-reload', function() {
	browserSync.reload();
});
