const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const ingredientsElem = document.createElement("li");

//   ingredientsElem.textContent = ingredient;

//   console.dir(ingredientsElem.textContent);

//   ingredientsElem.classList.add("item");

//   ingredientsList.appendChild(ingredientsElem);
// });

// console.dir(ingredientsList);

const ingredientsList = document.getElementById("ingredients");

const ingredientsElements = ingredients.map((ingredient) => {
  const ingredientsElem = document.createElement("li");
  ingredientsElem.textContent = ingredient;
  ingredientsElem.classList.add("item");
  return ingredientsElem;
});

ingredientsList.append(...ingredientsElements);
