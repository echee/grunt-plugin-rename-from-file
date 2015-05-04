/*
 * grunt-plugin-rename-from-file
 * https://github.com/cheee6y/grunt-plugin-rename-from-file
 *
 * Copyright (c) 2015 Emma Chee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    plugin_rename_from_file: {
      rename: {
        images: 'test/images/*.jpg',
        names: 'test/works.json',
        dest: 'dist/images/',
        lookup_key: 'md5'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'plugin_rename_from_file', 'nodeunit']);

  grunt.registerTask('rename', ['plugin_rename_from_file']);
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
