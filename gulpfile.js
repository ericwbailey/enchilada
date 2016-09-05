var requireDir = require('require-dir');

// Require all tasks in `tasks/`
requireDir('./tasks', { recurse: true });





var paths = {
    pageLayouts: {
        input: 'src/layouts/**/{*.html,*shtml}',
        testing: 'test/_layouts/',
        watch: 'src/layouts/**/{*.html,*shtml}',
        dist: 'dist/'
    },
    pages: {
        input: 'src/pages/**/*',
        exclude: 'src/pages/{_partials,_partials/**}',
        testing: 'test/',
        watch: 'src/pages/**/*.html',
        site: 'test/_site/**/*html',
        deploy: 'dist/'
    },
    sitemap: {
        input: 'test/_site/sitemap.xml',
        output: 'dist/'
    },
    icons: {
        input: 'src/touch_icons/{*.ico,*.png}',
        output: 'dist/'
    }
};
