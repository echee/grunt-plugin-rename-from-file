'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.plugin_rename_from_file = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    var file = '35d54f6649e07b9db764998faa2bce61.jpg';
    var actual = grunt.file.exists('test/expected/' + file);
    var expected = grunt.file.exists('dist/images/' + file);
    grunt.file.exists
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
