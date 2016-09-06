var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var wiredep = require('wiredep').stream;

gulp.task('default', ['dev', 'lib', 'lib-js', 'app-js', 'gen-css']);

gulp.task('dev', function() {
  gulp.src(['components/head/*.html', 'components/!(footer)/**/*.html', 'components/footer/*.html'])
  .pipe(concat('index.html'))
  .pipe(gulp.dest('./'));
});

gulp.task('lib', function() {
  gulp.src('bower_components/**/bootstrap.min.css')
  .pipe(concat('lib.css'))
  .pipe(gulp.dest('./'));
});

gulp.task('lib-js', function() {
  gulp.src(['bower_components/**/angular.min.js', 'bower_components/**/angular-route.min.js', 'bower_components/**/angular-cookies.min.js', 'bower_components/**/jquery.min.js', 'bower_components/**/bootstrap.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('app-js', function() {
  gulp.src('components/**/*.es6')
  .pipe(babel({
            presets: ['es2015']
        }))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('gen-css', () =>
    gulp.src([
            'components/global/global.scss',
            'src/components/**/*.scss'
        ])
		.pipe(wiredep())
        .pipe(concat('app.css'))
        .pipe(sass({errLogToConsole: true}))
        .on('error', function (e) {
            console.log('>>> ERROR', e);
            this.emit('end');
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .on('error', function (e) {
            console.log('>>> ERROR', e);
            this.emit('end');
        })
        .pipe(gulp.dest("./"))
);