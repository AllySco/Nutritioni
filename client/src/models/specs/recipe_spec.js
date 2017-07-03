var assert = require('assert');
var Recipe = require('../recipe.js');

describe("Recipe", function() {


  var recipe;

  beforeEach(function() {
    recipe = new Recipe({
    	title: 'omelette',
    	ingredients: ['2 eggs'],
    	nutritionalInformation: {
    		carbs: 0.2,
    		fat: 0.5,
    		protein: 10
    	}
    });
  })

  it('should have title', function() {
    assert.strictEqual('string', typeof recipe.title);
  	assert.strictEqual('omelette', recipe.title);
  })

  it('should have 1 ingredient', function() {
  	assert.strictEqual(1, recipe.ingredients.length);
  })

  it('should have \'2 eggs\' as ingredient', function() {
  	assert.strictEqual('2 eggs', recipe.ingredients[0]);
  })

  it('should have nutritionalInformation', function() {
    var nutritionalInformation = {
      carbs: 0.2,
      fat: 0.5,
      protein: 10
    }
    assert.strictEqual('object', typeof recipe.nutritionalInformation)
    assert.deepStrictEqual(nutritionalInformation, recipe.nutritionalInformation);
  })



 })


