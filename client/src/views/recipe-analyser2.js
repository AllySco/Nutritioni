// All the methods have been ordered for readability

// 1. UI components
// 2. Event handlers
// 3. Callbacks
// 4. Helper mothods

var RecipeAnalysisRequest = require('../apis/recipe-analysis-request.js');
var SavedRecipesRequest = require('../apis/saved-recipes-request');
var PieChart = require('../charts/pie-chart');
var ColumnChart = require('../charts/column-chart');

var RecipeAnalyser = function() {
  // state holders
  this.selectedRecipe = null;
  this.newRecipeData = null;

  // we will watch these for events
  this.form = null;
  this.addExtraIngredientButton = null;
  this.saveRecipeButton = null;
  this.clearFormButton = null;
  this.savedRecipesSelect = null;

  // create ui
  this.render();
  this.retrieveSavedRecipes();
  this.setEventListeners();

}

RecipeAnalyser.prototype = {

  render: function() {
    var main = document.createElement('main');
    main.id = 'recipe-analyser';

    var savedRecipesContainer = this.createSavedRecipesContainer();

    var mainContent = this.createMainContent();

    main.appendChild(savedRecipesContainer);
    main.appendChild(mainContent);

    document.body.appendChild(main);
  },

  //UI COMPONENTS

  createSavedRecipesContainer: function() {
    var container = this.createDiv('saved-recipes');

    var dropdownContainer = this.createDiv('dropdown-container');

    var label = this.createDropdownLabel();

    this.savedRecipesSelect = this.createSelect();

    dropdownContainer.appendChild(label);
    dropdownContainer.appendChild(this.savedRecipesSelect);
    container.appendChild(dropdownContainer);

    return container;
  },

  createDropdownLabel: function() {
    var label = document.createElement('label');
    label.setAttribute('for', 'saved-recipes');
    label.innerText = 'Saved Recipes:';

    return label;
  },

  createSelect: function() {
    var select = document.createElement('select')
    select.name = 'saved-recipes';
    select.id = 'saved-recipes-dropdown';

    return select;
  },

  // Main Content Div

  createMainContent: function() {
    var mainContentContainer = this.createDiv('main-content');

    this.form = this.createForm();

    var chartContainers = this.createChartContainers();

    mainContentContainer.appendChild(this.form);
    mainContentContainer.appendChild(chartContainers);

    return mainContentContainer;
  },

  createForm: function() {
    var form = document.createElement('form');
    form.action = '/';
    form.method = 'post';

    var formInputLinesDiv = this.createFormInputLinesDiv();

    var buttonsContainer = this.createButtonsContainer();

    form.appendChild(formInputLinesDiv);
    form.appendChild(buttonsContainer);

    return form;
  },

  createFormInputLinesDiv: function() {
    var formInputLinesDiv = this.createDiv('form-input-lines');

    var titleFormSection = this.createTitleFormSection();

    var ingredientsFormSection = this.createIngredientsFormSection();

    formInputLinesDiv.appendChild(titleFormSection);
    formInputLinesDiv.appendChild(ingredientsFormSection);

    return formInputLinesDiv;
  },

  createTitleFormSection: function() {
    var titleFormSection = document.createElement('div');
    titleFormSection.classList.add('title');
    titleFormSection.classList.add('form-section');

    var label = this.createTitleLabel();

    var input = this.createTitleInput();

    titleFormSection.appendChild(label);
    titleFormSection.appendChild(input);

    return titleFormSection;
  },

  createTitleLabel: function() {
    var label = document.createElement('label');
    label.setAttribute('for', 'title');
    label.innerText = 'Title:';

    return label;
  },

  createTitleInput: function() {
    var input = document.createElement('input');
    input.id = 'title';
    input.classList.add('input-textbox');
    input.type = 'text';

    return input;
  },

  createIngredientsFormSection: function() {
    var ingredientsFormSection = document.createElement('div');
    ingredientsFormSection.classList.add('ingredients');
    ingredientsFormSection.classList.add('form-section');

    var label = this.createIngredientLabel();

    var ingredientInputsDiv = this.createIngredientInputsDiv();

    ingredientsFormSection.appendChild(label);
    ingredientsFormSection.appendChild(ingredientInputsDiv);

    return ingredientsFormSection;
  },

  createIngredientLabel: function() {
    var label = document.createElement('label');
    label.setAttribute('for', 'ingredients');
    label.innerText = 'Ingredients:';

    return label;
  },

  createIngredientInputsDiv: function() {
    var container = this.createDiv('ingredient-inputs');

    var input = this.createInitialIngredientInput();

    this.addExtraIngredientButton = this.createAddExtraIngredientButton();

    container.appendChild(input);
    container.appendChild(this.addExtraIngredientButton);

    return container;
  },

  createInitialIngredientInput: function() {
    var input = document.createElement('input');
    input.id = 'ingredients';
    input.classList.add('input-textbox');
    input.type = 'text';

    return input;
  },

  createAddExtraIngredientButton: function() {
    var button = document.createElement('button');
    button.id = 'add-extra-ingredient';
    button.type = 'button';
    button.innerText = '+';

    return button;
  },

  createButtonsContainer: function() {
    var container = this.createDiv('buttons-container');

    var input = this.createAnalyseRecipeButton();

    this.clearFormButton = this.createButton('Clear Data');

    this.saveRecipeButton = this.createButton('Save Recipe');

    container.appendChild(input);
    container.appendChild(this.clearFormButton);
    container.appendChild(this.saveRecipeButton);

    return container;
  },

  createAnalyseRecipeButton: function() {
    var button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Analyse Recipe';

    return button;
  },

  createButton: function(innerText) {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerText = innerText;

    return button;
  },

  createChartContainers: function() {
    var container = this.createDiv('chart-containers');

    var pieChartContainer = this.createDiv('pie-chart');

    var columnChartContainer = this.createDiv('column-chart');

    container.appendChild(pieChartContainer);
    container.appendChild(columnChartContainer);

    return container;
  },

  createDiv: function(id) {
    var div = document.createElement('div');
    div.id = id;

    return div;
  },

  createInitialDropdownOption: function() {
    var option = document.createElement('option');
    option.text = "Recipes";
    option.disable = true;
    option.selected = true;

    return option;
  },



  // EVENT HANDLERS
  setEventListeners: function() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

    this.addExtraIngredientButton.addEventListener('click', this.handleAddExtraIngredientInputClick);

    this.saveRecipeButton.addEventListener('click', this.handleSaveClick);

    this.clearFormButton.addEventListener('click', this.handleClearDataClick.bind(this));

    this.savedRecipesSelect.addEventListener('change', this.handleDropdown)
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var ingredients = this.getIngredientsFromInputs();

    var data = {
      title: this.form['title'].value,
      ingr: ingredients
    }
    this.newRecipeData = data;
    this.newRecipeData.nutritionalInformation = [];
    var request = new RecipeAnalysisRequest();
    request.makePostRequest(data, this.analyseRecipeCallback);
  },

  handleAddExtraIngredientInputClick: function() {
    var input = document.createElement('input');
    input.type = "text";
    input.classList.add("input-textbox");
    input.classList.add("extra-ingredient");
    var container = document.querySelector('#ingredient-inputs');
    container.insertBefore(input, container.children[container.children.length -1]);
  },

  handleSaveClick: function() {
    var url = "http://localhost:3001/api/recipes";
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', this.saveCallback);
    var jsonString = JSON.stringify(this.newRecipeData);
    request.send(jsonString);
  },

  handleClearDataClick: function() {

    this.clearAllInputBoxes();

    this.clearExtraIngredientBoxes();

    this.clearCharts();

    this.clearRecipeInformation();   
  },

  handleDropdown: function() {

  },




  // HELPER FUNCTIONS

  getIngredientsFromInputs: function() {
    var ingredientInputs = document.querySelectorAll('#ingredient-inputs input');
    var ingredients = [];

    for (var i = 0; i < ingredientInputs.length; i++) {
      var ingredient = ingredientInputs[i].value;
      if (ingredient !== "") ingredients.push(ingredient);
    }
    return ingredients;
  },

  clearCharts: function() {
    var pieChart = document.getElementById('pie-chart');
    pieChart.innerText = "";

    var columnChart = document.getElementById('column-chart');
    columnChart.innerText = "";
  },

  clearAllInputBoxes: function() {
    var inputs = document.querySelectorAll('#ingredient-inputs input');
    var title = document.querySelectorAll('#form-input-lines input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    for (var i = 0; i < title.length; i++) {
      title[i].value = "";
    }
  },

  clearExtraIngredientBoxes: function() {
    var additional = document.querySelectorAll('.extra-ingredient');
    for (var i = 0; i < additional.length; i++){
      additional[i].remove();
    }
  },

  clearRecipeInformation: function() {
    var select = document.querySelector('select');
    select.value = 'Recipes';
    var ul = document.querySelector('ul');
    ul.innerText = "";  
  },

  populateRecipeDropdown: function(recipesData) {
    var select = document.querySelector('select');

    var initialOption = this.createInitialDropdownOption();
    select.options.add(initialOption);
    for (var recipe of recipesData) {
      var option = document.createElement("option");
      option.value = recipe.title;
      option.text = recipe.title;
      select.options.add(option);
    }
  },

  retrieveSavedRecipes: function() {
    var request = new SavedRecipesRequest();
    this.currentRequest = request.makeGetRequest(this.savedRecipesCallback.bind(this));
  },

  

  



  // CALLBACKS
  savedRecipesCallback: function() {
    var recipesData = JSON.parse(this.currentRequest.responseText);
    this.populateRecipeDropdown(recipesData);
  },

  analyseRecipeCallback: function(jsonResponse) {
    var responseData = JSON.parse(jsonResponse);

    var nutrients = responseData.totalNutrients;
    var NutrientData = [{ 
      name: "vitamins",
      data: [
      { y: nutrients.CA.quantity , color: 'red' },
      { y: nutrients.FE.quantity, color: 'blue' },
      { y: nutrients.K.quantity, color: 'orange' },
      { y: nutrients.MG.quantity, color: 'purple' },
      { y: nutrients.P.quantity, color: 'brown' },
      { y: nutrients.TOCPHA.quantity, color: 'yellow' },
      { y: nutrients.ZN.quantity, color: 'black' },
      ]
    }];

    var NutrientLabels = [ "Calcium", "Iron", "Potassium", "Magnesium", "Phosphorous", "Vitamin E", "Zinc"];

    var pieChartData = [
    { 
      name: nutrients.CHOCDF.label,
      y: nutrients.CHOCDF.quantity,
      color: 'red'
    },
    { 
      name: nutrients.FAT.label,
      y: nutrients.FAT.quantity,
      color: 'green'
    },
    { 
      name: nutrients.PROCNT.label,
      y: nutrients.PROCNT.quantity,
      color: 'blue'
    }
    ];


    new PieChart('Nutrition Info', 'Nutrients', pieChartData);
    new ColumnChart('Vitamin Info', NutrientData, NutrientLabels);

    
  }

  

}

module.exports = RecipeAnalyser;
