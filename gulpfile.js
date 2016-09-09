var requireDir = require('require-dir');

// Require all tasks in `tasks/`
requireDir('./tasks', { recurse: true });
