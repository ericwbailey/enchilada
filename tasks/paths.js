module.exports = {
    clean: {
        build: './.build/**',
        buildImages: './.build/images/**',
        documentation: './documentation/**',
        test: './test/**',
        deploy: './docs/**'
    },
    documentation: {
        srcSassdoc: './src/**/*.scss',
        buildSassdoc: './documentation/styles'
    },
    images: {
        src: ['./src/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./src/vendor/**/*', '!./src/static/**/*'],
        watch: ['./src/**/*.{bmp,ico,jpg,jpeg,gif,pdf,webp,png,tiff,svg}', '!./src/vendor/**/*', '!./src/static/**/*'],
        build: './.build/images/',
        deploy: './docs/images/'
    },
    styles: {
        src: './src/main.scss',
        watch: './src/**/*.scss',
        build: './.build/',
        test: './test/',
        deploy: './docs/'
    },
    lint: {
        srcScripts: ['./src/*.js', '!./src/vendor/**/*.js']
    },
    pages: {
        src: './src/*.html',
        watch: './src/**/*.html',
        build: './.build/',
        test: './test/',
        deploy: './docs/'
    },
    scripts: {
        src: './src/**/*.js',
        build: '.build/scripts'
    },
    vendor: {
        srcJquery: 'node_modules/jquery/dist/jquery.min.js',
        buildJquery: './src/vendor/jquery/'
    }
};
