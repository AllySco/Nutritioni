var RecipeRequest = require('../edamam_api/recipe-request.js');

var RecipeForm = function() {
  var main = document.querySelector('main');
  this.form = this.createForm();
  var chartContainer = document.createElement('div');
  chartContainer.id = 'pie-chart';
  main.appendChild(this.form);
  main.appendChild(chartContainer);
  this.form.addEventListener('submit', this.handleSubmit.bind(this));
}

RecipeForm.prototype = {
  handleSubmit: function(event) {
    event.preventDefault();
    var ingredientInputs = document.querySelectorAll('.ingredients input');
    var ingredients = [];
    for (var i = 0; i < ingredientInputs.length; i++) {
      var ingredient = ingredientInputs[i].value;
      if (ingredient !== "") ingredients.push(ingredient);
    }
    console.log("ingredients mapped", ingredients);
    var data = {
      title: this.form['title'].value,
      ingr: ingredients
    }
    var request = new RecipeRequest();
    request.makePostRequest(data);
  },
  createForm: function() {
    var form = document.createElement('form');
    form.id = 'recipe-form';
    form.method = 'post';
    form.action = '/';
    var title = this.createInput('title');
    var ingredients = this.createInput('ingredients');
    var submit = this.createSubmitButton();
    this.addIngredientButton(ingredients);
    this.addClearDataButton(form);

    form.appendChild(title);
    form.appendChild(ingredients);
    form.appendChild(submit);
    return form;
  },
  createInput: function(name) {
    var container = document.createElement('div');
    container.classList.add(name);
    var label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerText = name.replace(/\b\w/g, function(l) {
      return l.toUpperCase()
    });
    var input = document.createElement('input');
    input.id = name;
    input.type = "text";
    container.appendChild(label);
    container.appendChild(input);
    return container;
  },
  createSubmitButton: function() {
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Analyse Recipe';
    return submit;
  },
  addIngredientButton: function(container) {
    var plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.type = "button";
    container.appendChild(plusButton);
    plusButton.addEventListener('click', this.handleAddIngredientClick);
  },
  handleAddIngredientClick: function() {
    var input = document.createElement('input');
    input.type = "text"
    input.id = "additional"
    var container = document.querySelector('.ingredients');
    container.insertBefore(input, container.children[container.children.length -1]);
  },
  addClearDataButton: function(container) {
    var clearButton = document.createElement('button');
    clearButton.innerText = 'Clear Data';
    clearButton.type = 'button';
    container.appendChild(clearButton);
    clearButton.addEventListener('click', this.handleClearDataClick);
  },
  handleClearDataClick: function() {
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    var additional = document.querySelectorAll('input[id=additional]');
    for (var i = 0; i < additional.length; i++){
      additional[i].remove();
    }
    var pieChart = document.getElementById('pie-chart');
    pieChart.innerText = "";
  }
}


module.exports = RecipeForm;
