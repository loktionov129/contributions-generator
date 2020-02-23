const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../config');

const layoutTask = require('./layout');
const scriptsTask = require('./scripts');
const stylesTask = require('./styles');

function sync() {
    return browserSync({
        server: {
            baseDir: config.path.dest,
        },
        host: config.watch.host,
        port: config.watch.port,
        logPrefix: config.watch.logPrefix,
        injectChanges: true,
        tunnel: false,
    });
}

function watch(cb) {
    gulp.watch(config.path.src.layout, layoutTask);
    gulp.watch(config.path.src.styles, stylesTask);
    gulp.watch(config.path.src.scripts, scriptsTask);
    cb();
}

module.exports = gulp.parallel(sync, watch);
