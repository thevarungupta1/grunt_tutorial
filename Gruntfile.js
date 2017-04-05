module.exports = function (grunt) {

    //configration
    grunt.initConfig({
        //pass in options to plugins, references to files etc
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                //src: ['css/*.css'],
                src: ['css/reset.css', 'css/bootstarp.css','css/styles.css'],
                dest: 'build/styles.css'
            }
        },
        sass: {
            build: {
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            }
        },
        uglify:{
            build:{
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }

    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //regester task
    grunt.registerTask('concat-js', ['concat:js']);

    grunt.registerTask('concat-css', ['concat:css']);

    grunt.registerTask('run', function () {
        console.log('I m running..');
    });

    grunt.registerTask('sleep', function () {
        console.log('I m sleeping..');
    });

    grunt.registerTask('all', ['sleep', 'run']);



};