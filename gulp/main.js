const gulp = require('gulp');

const cleanTask = require('./tasks/clean');
const layoutTask = require('./tasks/layout');
const scriptsTask = require('./tasks/scripts');
const stylesTask = require('./tasks/styles');
const watchTask = require('./tasks/watch');

module.exports = {
    cleanTask,
    stylesTask, // temp
    buildTask: gulp.series(
        cleanTask,
        gulp.parallel(layoutTask, scriptsTask, stylesTask)
    ),
    default: watchTask
};
