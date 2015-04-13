var appRoot = './src/';
var libRoot = './bower_components/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '*.html',
    output: 'www/',
    html: {
        index: appRoot + 'index.html',
        watch: appRoot + '**/*.html'
    },
    mainFile: {
        src: appRoot +  'app/app.js',
        out: 'app.js'
    },
    libs: {
        src: [
            libRoot + 'ionic/release/js/ionic.bundle.js'
        ],
        out: 'libraries.js'
    },
    style: {
        src: appRoot + 'content/styles/main.scss',
        out: 'main.css',
        watch: appRoot + '**/*.scss'
    },
    fonts: {
        ionic: libRoot + 'ionic/release/fonts/*',
        out: 'fonts'
    }
};
