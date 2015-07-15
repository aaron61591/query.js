module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
                'src/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/query.js': [
                        'src/query.js',
                        'src/promise.js',
                        'src/method.js',
                        'src/generator.js',
                        'src/cache.js',
                        'src/methods/*.js',
                        'src/init.js'
                    ]
                }
            }
        },
        express: {
            options: {
                port: 4000
            },
            dev: {
                options: {
                    script: 'server/app.js'
                }
            }
        },
        watch: {
            express: {
                files: [
                    'server/*.js'
                ],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            },
            example: {
                files: [
                    'index.html',
                    'index.css',
                ],
                options: {
                    livereload: true
                }
            },
            query: {
                files: [
                    'src/**/*'
                ],
                tasks: ['uglify']
            }
        },
        copy: {
            release: {
                src: 'dist/query.js',
                dest: 'release/query-' + grunt.file.readJSON('package.json').version + '.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify', 'express:dev', 'watch']);
    grunt.registerTask('release', ['copy']);
};