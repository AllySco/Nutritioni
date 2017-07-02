use nutritioni;

db.recipes.insert([
{
  title: "omelette",
  ingredients: ["5 eggs", "50 grams of cheese", "a pinch of salt", "a tablespoon of butter", "a dash of pepper", "1 sliced pepper", "5 mushrooms", "a dash of oregano"],
  nutritionalInformation: {
    carbs: 10.787574358748644,
    fat: 49.391770953284194,
    protein: 42.95867442693934
  }
},
{
  title: "peanutbutter sandwich",
  ingredients: ["2 slices of bread and butter", "1 tablespoon of peanutbutter", "a teaspoon of jam"
  ],
  nutritionalInformation: {
    carbs: 36.400666557216645,
    fat: 18.212466666555407,
    protein: 9.88086666607857
  }
},
{
  title: "steak and mushrooms",
  ingredients: ["300 grams t-bone steak", "50 grams of mushrooms"],
  nutritionalInformation: {
    carbs: 1.63,
    fat: 31.28,
    protein: 85.125
  }
}
])

