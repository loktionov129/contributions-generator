const gulp = require('gulp');
const noop = require('gulp-noop');
const sourcemaps = require('gulp-sourcemaps');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const size = require('gulp-size');
const browserSync = require('browser-sync');

const config = require('../config');
const errorHandler = require('../utils/error-handler');

const bundler = watchify(browserify({
    entries: [config.path.src.scripts],
    transform: [
        babelify.configure({
            presets: ['@babel/preset-env'],
            sourceMaps: !config.isProduction,
        }),
    ],
}));

function scriptsTask() {
    return bundler
        .bundle()
        .pipe(errorHandler('scripts'))
        .pipe(source(config.bundle.js))
        .pipe(buffer())
        .pipe(config.isProduction ? noop() : sourcemaps.init())
        .pipe(uglify())
        .pipe(config.isProduction ? noop() : sourcemaps.write('./'))
        .pipe(size({ title: 'JS' }))
        .pipe(gulp.dest(config.path.dest.scripts))
        .pipe(browserSync.reload({ stream: true }));
}

bundler.on('update', scriptsTask);

module.exports = scriptsTask;
