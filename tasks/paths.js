module.exports = {
    clean: {
        build: {
            root: './.build/**',
            images: './.build/images/**'
        },
        deploy: {
            root: './docs/**',
            images: './docs/images/**'
        },
        documentation: {
            root: './documentation/**',
            styles: './documentation/styles/**',
        },
        test: {
            root: './.test/**',
            images: './.test/images/**'
        }
    },
    documentation: {
        sassdoc: {
            src: './src/**/*.scss',
            dest: './documentation/styles'
        }
    },
    errata: {
        src: './src/',
        build: './.build/',
        test: './.test/'
    },
    images: {
        src: ['./src/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./src/vendor/**/*', '!./src/static/**/*'],
        watch: ['./src/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./src/vendor/**/*', '!./src/static/**/*'],
        build: './.build/images/',
        test: './.test/images/',
        deploy: {
            src: './.test/images/**/*',
            dest: './docs/images/'
        }
    },
    styles: {
        src: './src/main.scss',
        watch: './src/**/*.scss',
        build: './.build/',
        test: './.test/',
        deploy: './docs/'
    },
    lint: {
        scripts: ['./src/*.js', '!./src/vendor/**/*.js'],
        styles: './src/**/*.scss'
    },
    pages: {
        src: './src/*.html',
        watch: './src/**/*.html',
        build: './.build/',
        test: {
            src: './.build/*.html',
            dest: './.test/',
        },
        deploy: {
            src: './.test/*.html',
            dest: './docs/'
        }
    },
    scripts: {
        src: './src/**/*.js',
        build: './.build/scripts/',
        test: './.test/scripts/',
        deploy: {
            src: './.test/main.js',
            dest: './docs/scripts/'
        }
    },
    static: {
        src: './src/static/**/*',
        build: './.build/static/',
        test: './.test/static/'
    },
    vendor: {
        jquery: {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: './src/vendor/jquery/'
        }
    }
};
