module.exports = {
    browsersync: {
        basedir: './.build/',
        index: 'index.html',
        watch: './.build/index.html'
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
    documentation: {
        sassdoc: {
            source: './source/**/*.scss',
            dest: './documentation/styles'
        }
    },
    errata: {
        source: './source/',
        build: './.build/',
        test: './.test/'
    },
    images: {
        source: ['./source/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./source/vendor/**/*', '!./source/static/**/*'],
        watch: ['./source/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./source/vendor/**/*', '!./source/static/**/*'],
        build: './.build/images/',
        test: './.test/images/',
        deploy: {
            source: './.test/images/**/*',
            dest: './docs/images/'
        }
    },
    lint: {
        scripts: ['./source/*.js', '!./source/vendor/**/*.js'],
        styles: ['./source/**/*.scss', '!./source/base/_reset.scss', '!./source/vendor/**/*'],
        pages: './source/**/*.html'
    },
    pages: {
        source: './source/*.html',
        watch: './source/**/*.html',
        build: './.build/',
        test: {
            source: './.build/*.html',
            dest: './.test/',
        },
        deploy: {
            source: './.test/*.html',
            dest: './docs/'
        }
    },
    scripts: {
        source: './source/**/*.js',
        watch: './source/**/*.js',
        build: './.build/',
        test: './.test/',
        deploy: {
            source: './.test/main.js',
            dest: './docs/'
        }
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
        test: './.test/',
        deploy: './docs/'
    },
    vendor: {
        jquery: {
            source: 'node_modules/jquery/dist/jquery.min.js',
            dest: './source/vendor/jquery/'
        }
    }
};
