const resolvePath = require('./utils/resolve-path');

module.exports = resolvePath({
    path: {
        dest: {
            layout: 'dest/',
            scripts: 'dest/js/',
            styles: 'dest/css/'
        },
        src: {
            layout: 'src/index.html',
            scripts: 'src/scripts/**/*.js',
            styles: 'src/styles/**/*.less'
        },
        clean: ['dest/**/*', '!dest/.gitignore', '!dest/favicon.ico']
    },
    bundle: {
        html: 'index.html',
        js: 'bundle.min.js',
        css: 'styles.min.css'
    },
    watch: {
        host: 'localhost',
        port: 3000,
        logPrefix: 'BrowserSync'
    }
});