const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const ingredientsEls = ingredients.map((ingredient) => {
  const listEls = document.createElement("li");
  listEls.textContent = ingredient;
  listEls.classList.add("item");
  list.append(listEls);
});
