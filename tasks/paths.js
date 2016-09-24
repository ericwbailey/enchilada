module.exports = {
    browsersync: {
        basedir: './.build/',
        index: 'index.html',
        watch: './.build/**/*.html'
    },
    clean: {
        build: {
            root: './.build/**',
            images: './.build/images/**',
            scripts: './.build/main.js',
            static: './.build/static/**/*',
            styles: './.build/main.css'
        },
        deploy: {
            root: './docs/**',
            images: './docs/images/**',
            scripts: './docs/main.js',
            static: './docs/static/**/*',
            styles: './docs/main.css'
        },
        documentation: {
            root: './documentation/**',
            styles: './documentation/styles/**',
        },
        test: {
            root: './.test/**',
            images: './.test/images/**',
            scripts: './.test/main.js',
            static: './.test/static/**/*',
            styles: './.test/main.css'
        }
    },
    deploy: {
        source: './.test/**/*',
        dest: './docs/'
    },
    documentation: {
        sassdoc: {
            source: './source/**/*.scss',
            dest: './documentation/styles'
        }
    },
    errata: {
        source: [
            './source/browserconfig.xml',
            './source/crossdomain.xml',
            './source/humans.txt',
            './source/manifest.json',
            './source/robots.txt'
        ],
        build: './.build/',
        test: './.test/'
    },
    images: {
        source: [
            './source/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}',
            '!./source/vendor/**/*',
            '!./source/static/**/*'
        ],
        watch: [
            './source/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}',
            '!./source/vendor/**/*',
            '!./source/static/**/*'
        ],
        build: './.build/images/',
        test: './.test/images/'
    },
    lint: {
        scripts: [
            './source/*.js',
            '!./source/vendor/**/*.js'
        ],
        styles: [
            './source/**/*.scss',
            '!./source/base/_reset.scss',
            '!./source/vendor/**/*'
        ],
        pages: './source/**/*.html'
    },
    pages: {
        source: './source/*.html',
        watch: './source/**/*.html',
        build: './.build/',
        test: {
            source: './.build/*.html',
            dest: './.test/',
        }
    },
    scripts: {
        source: './source/**/*.js',
        watch: './source/**/*.js',
        build: './.build/',
        test: './.test/',
    },
    static: {
        source: './source/static/**/*',
        build: './.build/static/',
        test: './.test/static/'
    },
    styles: {
        source: './source/main.scss',
        watch: './source/**/*.scss',
        build: './.build/',
        test: './.test/'
    },
    vendor: {
        jquery: {
            source: 'node_modules/jquery/dist/jquery.min.js',
            dest: './source/vendor/jquery/'
        }
    }
};
