define('client1/tests/pods/components/recipe-form/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/recipe-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/recipe-form/component.js should pass jshint.\npods/components/recipe-form/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/recipe-form/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/recipe-form/component.js: line 18, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/recipe-form/component.js: line 24, col 30, [\'onSave\'] is better written in dot notation.\npods/components/recipe-form/component.js: line 29, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/recipe-form/component.js: line 34, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n6 errors').to.be.ok; 
  })});

});