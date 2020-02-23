const plumber = require('gulp-plumber');

const logger = require('./logger');

module.exports = function errorHandler(type) {
    return plumber({
        errorHandler(error) {
            logger.logType(`${type} error`, error.name);
            logger.logProp('type', error.type);
            logger.logProp('cause', error.cause && error.cause.message);
            logger.logProp('message', error.message);
            logger.logProp('extract', error.extract);
            logger.logProp('line', error.line);
            logger.logProp('column', error.column);
            this.emit('end');
            this.end();
        },
    });
};
