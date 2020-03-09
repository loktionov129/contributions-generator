module.exports = {
    logType: function logRed(type, errorName) {
        if (type && errorName) {
            console.log(`[${type}] ${errorName}`);
        }
    },
    logProp: function log(name, value) {
        if (name && value) {
            console.log(`${name}: ${value}`);
        }
    },
};
