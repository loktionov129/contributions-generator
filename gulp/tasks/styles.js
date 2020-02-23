const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const size = require('gulp-size');
const browserSync = require('browser-sync');

const config = require('../config');
const errorHandler = require('../utils/error-handler');

module.exports = function stylesTask() {
    return gulp.src(config.path.src.styles)
        .pipe(errorHandler('styles'))
        .pipe(less())
        .pipe(autoprefixer('> 2%'))
        .pipe(gcmq())
        .pipe(concat(config.bundle.css))
        .pipe(cleanCSS())
        .pipe(size({ title: 'CSS' }))
        .pipe(gulp.dest(config.path.dest.styles))
        .pipe(browserSync.reload({ stream: true }));
};
