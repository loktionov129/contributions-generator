#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

exec('yarn run gulp -f gulp/main.js')
    .then(({ stdout }) => stdout)
    .then(console.warn);
