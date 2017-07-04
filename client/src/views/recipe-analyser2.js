// All the methods have been ordered for readability

// 1. UI components
// 2. Event handlers
// 3. Callbacks
// 4. Helper mothods

var RecipeRequest = require('../apis/recipe-analysis-request.js');

var RecipeAnalyser = function() {
  // state holders
  this.selectedRecipe = null;
  this.newRecipeData = null;

  // we will watch these for events
  this.analyseRecipeButton = null;
  this.saveRecipeButton = null;
  this.clearFormButton = null;
  this.savedRecipesSelect = null;

  // create ui
  this.render();
  this.initializeDropdown();
  this.setEventListeners();

}

RecipeAnalyser.prototype = {

  render: function() {
    var main = document.createElement('main');
    main.id = 'recipe-analyser';
    var savedRecipesContainer = this.createSavedRecipesContainer();
    var mainContent = this.createMainContent();

  },

  //UI COMPONENTS

  createSavedRecipesContainer: function() {
    var container = document.createElement('div');
    container.id = 'saved-recipes';

    var dropdownContainer = document.createElement('div');
    dropdownContainer.id = 'dropdown-container';

    var label = this.createDropdownLabel();

    var select = this.createSelect();

    dropdownContainer.appendChild(label);
    dropdownContainer.appendChild(select);
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
    var mainContentContainer = document.createElement('div');
    mainContentContainer.id = 'main-content';

    var form = this.createForm();
  },

  createForm: function() {
    var form = document.createElement('form');
    form.action = '/';
    form.method = 'post';

    var formInputLinesDiv = this.createFormInputLinesDiv();


  },

  createFormInputLinesDiv: function() {
    var formInputLinesDiv = document.createElement('div');
    formInputLinesDiv.id = 'form-input-lines';

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
  },

  createIngredientLabel: function() {
    var label = document.createElement('label');
    label.setAttribute('for', 'ingredients');
    label.innerText = 'Ingredients:';
    return label;
  },

  










  }
