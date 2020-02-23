const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const size = require('gulp-size');
const browserSync = require('browser-sync');

const config = require('../config');
const errorHandler = require('../utils/error-handler');

module.exports = function scriptsTask() {
    return gulp.src(config.path.src.scripts)
        .pipe(errorHandler('scripts'))
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(concat(config.bundle.js))
        .pipe(uglify())
        .pipe(size({ title: 'JS' }))
        .pipe(gulp.dest(config.path.dest.scripts))
        .pipe(browserSync.reload({ stream: true }));
};
