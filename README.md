# grunt-plugin-rename-from-file

> batch rename files by mapping them to a supplied list of names. Intended to rename a bunch of image files that corresponded to a random name from a json file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plugin-rename-from-file --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-plugin-rename-from-file');
```

## The "plugin_rename_from_file" task

### Options
#### images
The destination of the images to be renamed

#### names
The destination of the JSON file with the names to be used.

#### dest
Where the renamed images will be saved to.

#### lookup_key
The key in the JSON file to be used as the name variable in the conversion process.

### Overview
In your project's Gruntfile, add a section named `plugin_rename_from_file` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  plugin_rename_from_file: {
      rename: {
        images: 'test/images/*.jpg',
        names: 'test/list_of_names.json',
        dest: 'dist/images/',
        lookup_key: 'md5'
      }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
