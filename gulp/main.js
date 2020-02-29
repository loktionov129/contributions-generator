const cleanTask = require('./tasks/clean');
const buildTask = require('./tasks/build');
const watchTask = require('./tasks/watch');

module.exports = {
    cleanTask,
    buildTask,
    default: watchTask,
};
