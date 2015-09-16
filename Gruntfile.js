module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
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
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            release: {
                src: 'dist/query.js',
                dest: 'release/query-' + grunt.file.readJSON('package.json').version + '.js'
            }
        },
        // 给 md5 的静态文件添加 banner
        usebanner: {
            md5: {
                options: {
                    banner: '<%= meta.banner %>',
                },
                files: {
                    src: ['dist/*']
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['jshint', 'uglify', 'express:dev', 'watch']);
    grunt.registerTask('release', ['usebanner', 'copy']);
};