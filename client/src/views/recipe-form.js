var RecipeRequest = require('../edamam_api/recipe-request.js');

var RecipeForm = function() {
  var main = document.querySelector('main');
  this.form = this.createForm();
  main.appendChild(this.form);
  this.form.addEventListener('submit', this.handleSubmit.bind(this));
}

RecipeForm.prototype = {
  handleSubmit: function(event) {
    event.preventDefault();
    var data = {
      title: this.form['title'].value,
      ingr: [this.form['ingredients'].value]
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

    form.appendChild(title);
    form.appendChild(ingredients);
    form.appendChild(submit);
    return form;
  },
  createInput: function(name) {
    var container = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerText = name.replace(/\b\w/g, function(l) {
      return l.toUpperCase()
    });
    var input = document.createElement('input');
    input.id = name;
    container.appendChild(label);
    container.appendChild(input);
    return container;
  },
  createSubmitButton: function() {
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Analyse Recipe';
    return submit;
  }
}

module.exports = RecipeForm;
