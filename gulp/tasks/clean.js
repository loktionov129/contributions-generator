const del = require('del');

const config = require('../config');

module.exports = function cleanTask(done) {
    del(config.path.clean, { force: true })
        .finally(done);
};
