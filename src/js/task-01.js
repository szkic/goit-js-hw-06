const categoryCount = document.querySelectorAll(".item").length;

const category = document.querySelectorAll(".item h2");
const elements = document.querySelectorAll(".item ul");

console.log("Number of categories:", categoryCount);
console.log("\n");

for (let i = 0; i < categoryCount; i++) {
  console.log(`Category: ${category[i].textContent}`);
  console.log(`Elements: ${elements[i].children.length}`);
  console.log("\n");
}
