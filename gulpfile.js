'use strict';

//Plugins
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('server', function() {
	browserSync.init(['app/index.html', 'app/assets/stylesheet/**/*.css', 'app/assets/javascript/**/*.js'], {
		open: 'external',
		server: {
			baseDir: './app/'
		},
	});
});

gulp.task('dist', function() {	
	gulp.src('./app/assets/javascript/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/assets/javascript/'));	
});