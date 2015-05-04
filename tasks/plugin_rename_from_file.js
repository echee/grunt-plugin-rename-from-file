/*
 * grunt-plugin-rename-from-file
 * https://github.com/cheee6y/grunt-plugin-rename-from-file
 *
 * Copyright (c) 2015 Emma Chee
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('plugin_rename_from_file', 'batch rename files by mapping them to a supplied list of names. Intended to rename a bunch of image files that corresponded to a random name from a json file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      var key = file.lookup_key;
      var namesList = [];
      var dest = file.dest;
      var names = file.names;
      var jsonfile = grunt.file.readJSON(names);
      var images = grunt.file.expand(file.images);

      grunt.file.delete(dest);

      //create an array to hold the names of the md5's
      for (var i=0; i<jsonfile.length; i++) {
        namesList.push(jsonfile[i][key]);
      }

      // copy the images to the destination folder with an md5 name
      for (var j=0; j<namesList.length; j++) {
        grunt.file.copy(images[j], dest + namesList[j] +'.jpg')
        grunt.log.writeln('File "' + namesList[j] +'.jpg" created.');
      }
    });
  });

};
