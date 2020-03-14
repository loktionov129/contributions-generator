const { join } = require('path');

function joinPath(originalPath) {
    const isExcludedPath = originalPath.startsWith('!');
    let path;
    let prefix;

    if (isExcludedPath) {
        path = originalPath.substr(1);
        prefix = '!';
    } else {
        path = originalPath;
        prefix = '';
    }

    return prefix + join('..', path).replace(/\\/g, '/');
}

/* eslint-disable no-param-reassign */
function resolveRecursive(path) {
    return Object.keys(path).reduce((state, key) => {
        const value = path[key];

        if (Array.isArray(value)) {
            state[key] = value.map(joinPath);
        } else if (typeof value === typeof {}) {
            state[key] = resolveRecursive(value);
        } else if (typeof value === typeof '') {
            state[key] = joinPath(value);
        }


        return state;
    }, {});
}
/* eslint-enable no-param-reassign */

module.exports = function resolvePath(config) {
    // eslint-disable-next-line no-param-reassign
    config.path = resolveRecursive(config.path);
    return config;
};
