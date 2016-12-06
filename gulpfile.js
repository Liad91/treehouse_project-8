'use strict';

/** Dependencies */
var gulp 				= require('gulp'),
		concat 			= require('gulp-concat'),
		sass 				= require('gulp-sass'),
		sourcemaps 	= require('gulp-sourcemaps'),
		rename  		= require('gulp-rename'),
		uglify 			= require('gulp-uglify'),
		image				= require('gulp-image'),
		eslint 			= require('gulp-eslint'),
		del					= require('del'); 

/** Concat & uglify all files in js folder and creates a map file (only if files pass lint test)*/
gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(sourcemaps.init())
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/scripts'));
});

/** Compile sass to minified css file and creates a map file */
gulp.task('styles', function() {
	return gulp.src('sass/global.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename('all.min.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/styles'));
});

/** Optimize all images */
gulp.task('images', function() {
	return gulp.src('images/*')
		.pipe(image())
		.pipe(gulp.dest('dist/content'));
});

/** Remove dist directory */
gulp.task('clean', function() {
	return del('dist');
});

/** Move index.html & icons folder to dist folder */
gulp.task('mv', function() {
	gulp.src(['index.html', 'icons/**'], { base: '.' })
		.pipe(gulp.dest('dist'));
});

/** Build task */
gulp.task('build', ['clean'], function() {
	return gulp.start('scripts', 'styles', 'images', 'mv');
});

/** let 'gulp' command run build task */
gulp.task('default', ['build']);