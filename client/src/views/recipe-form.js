var RecipeForm = function() {
  var main = document.querySelector('main');
  var form = document.createElement('form');
  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Analyse Recipe';
  form.id = 'recipe-form';
  var title = this.createInput('title');
  var ingredients = this.createInput('ingredients');


  main.appendChild(form);
  form.appendChild(title);
  form.appendChild(ingredients);
  form.appendChild(submit);
}

RecipeForm.prototype = {
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
  }
}

module.exports = RecipeForm;
