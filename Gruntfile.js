/*global module: true */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', '*.js', 'routes/*.js', 'src/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    console: true,
                    modeule: true,
                    document: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'bird-alert.js',
                cwd: '.',
                watch: ['.']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'nodemon']);
};
