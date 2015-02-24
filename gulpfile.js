// Include Gulp
var gulp = require('gulp');

// Include Our Plugins
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var rubySass = require('gulp-ruby-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var args = require('yargs').argv;

// gather command line args
var doMinify = args.minify;

// setup Path variables
var sourcePaths = {
	CSS: '_source/scss/**/*.scss',
	CSSBase: '_source/scss',
	SPRITE: '_source/sprite/*.png',
	IMG: '_source/img/**/*.png',
	JS: '_source/js/**/*.js',
	JSBase: '_source/js'
};
var destPaths = {
	CSS: 'css',
	JS: 'js',
	IMG: 'img'
};


// ==========================================
// ===           Static server            ===
// ==========================================
	// setup our browser-sync server
	gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: "./",
				index: "lowvoltagegenerator.html"
			}
		});
	});
	// reload
	gulp.task('reload', function () {
		console.log('browser-sync reload');
		browserSync.reload();
	});
// ==========================================


// =================================
// == task: Clean our Build Paths ==
// =================================
// the stream is "return" to force it to be async (gulp will wait for clean to finish)
gulp.task('clean', function () {
	return gulp.src([
			destPaths.CSS + "/**/*.css",
			destPaths.JS + "/**/*.js"
		], {read: false})
		.pipe(clean({force: true}));
});
// =================================


// =======================================================
// == task: Compile SASS to CSS, AutoPrefix, and Minify ==
// =======================================================
gulp.task('sass', function () {
	// set sass complete message
	var sassCompleteMessage = "SASS Complete";
	if (doMinify) {
		sassCompleteMessage = sassCompleteMessage + " : MINIFIED";
	}

	gulp.src(sourcePaths.CSS)
		// this hack forces rubysass to not return source maps
		.pipe(rubySass({ style: 'expanded', 'sourcemap=none': true }))
			.on('error', notify.onError({message: 'sass error: <%= error %>'}))
		.pipe(autoprefixer({browsers: ['last 4 versions']}))
		.pipe(gulpif(doMinify, csso()))
		.pipe(gulp.dest(destPaths.CSS))
		.pipe(notify({onLast: true, message: sassCompleteMessage}))
		.pipe(browserSync.reload({stream:true}));
});
// =======================================================


// ===================================
// == task: Concatenate & Minify JS ==
// ===================================
gulp.task('scripts', function() {
	gulp.src([
			sourcePaths.JSBase + '/jquery-1.11.1.min.js',
			sourcePaths.JSBase + '/main.js',
			sourcePaths.JSBase + '/ga.js',
			sourcePaths.JS
		])
		.pipe(concat('lowvoltage.js'))
		.pipe(gulpif(doMinify, uglify()))
		.pipe(gulp.dest(destPaths.JS));

	browserSync.reload();
});
// ===================================


// task: Watch Directories/Files for Change
gulp.task('watch', function () {
	gulp.watch(sourcePaths.CSS, ['sass']);
	gulp.watch(sourcePaths.JS, ['scripts']);
	gulp.start('browser-sync');
});


// task: Default, Clean, Compile, Watch. (pass in optional --minify flag)
gulp.task('default', ['clean'], function () {
	if (!doMinify) gulp.start('watch');
	gulp.start('sass', 'scripts');
});
