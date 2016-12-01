// ============================================================================
// Task
// Config
// ============================================================================
var gulp        = require('gulp-help')(require('gulp')), // http://gulpjs.com/
    help        = require('./help.js'),
    paths       = require('./paths.js'),
    fs          = require('fs'),
    inquirer    = require('inquirer'), //TODO: Add source URL
    replace     = require('gulp-token-replace'); //TODO: Add source URL


// Tasks ----------------------------------------------------------------------
// Ask for user input to generate config.js
gulp.task('config-make', function() {
    var questions = [
        {
            name: 'projectFullTitle',
            message: 'Your full project title'
        },
        {
            name: 'projectShortTitle',
            message: 'Short version of your project title'
        },
        {
            name: 'projectAuthor',
            message: 'Project author'
        },
        {
            name: 'projectAuthorEmail',
            message: 'Author email'
        },
        {
            name: 'projectAuthorURL',
            message: 'Author URL'
        },
        {
            name: 'projectFullDescription',
            message: 'Project description'
        },
        {
            name: 'projectShortDescription',
            message: 'Short project description'
        },
        {
            name: 'projectURL',
            message: 'Project URL'
        },
        {
            name: 'projectLanguage',
            message: 'Project language (lang="en-US")'
        },
        {
            name: 'projectLicense',
            message: 'Project license'
        },
        {
            name: 'projectColor',
            message: 'Project color'
        },
        {
            name: 'githubTitle',
            message: 'GitHub project title'
        },
        {
            name: 'githubAuthor',
            message: 'GitHub project author'
        },
        {
            name: 'siteTwitter',
            message: 'Project Twitter handle (@example)'
        },
        {
            name: 'authorTwitter',
            message: 'Author Twitter handle (@example)'
        },
        {
            name: 'jumpListTask',
            message: 'Windows jump list task'
        },
        {
            name: 'jumpListPage',
            message: 'Windows jump list task destination'
        },
        {
            name: 'jumpListIcon',
            message: 'Windows jump list task icon'
        },
        {
            name: 'iosAppID',
            message: 'iOS app ID number'
        },
        {
            name: 'chromeAppID',
            message: 'Chrome app ID'
        },
        {
            name: 'googleAnalyticsID',
            message: 'Google Analytics ID (UA-XXXXX-X)'
        }
    ];

    inquirer.prompt(questions).then(function (answers) {
        var file = './config.js';
        var obj = 'module.exports = {"site":' + JSON.stringify(answers, null, '  ') + '};';
        fs.writeFile(file, obj, function(err) {
            console.error(err);
        });
    });
});

// Replace site variables with user inputs stored in config.js
// Values can be updated by manually making changes in config.js
// and running this task again.
gulp.task('config-apply', function() {
    var config = require('./config.js');
    gulp.src('./**', {base: "./"})
        .pipe(replace({global:config}))
        .pipe(gulp.dest('.'));
});
