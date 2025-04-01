// #1
const arrayOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);

// #2
arrayOfCategories.forEach((e) => {
  const name = e.querySelector("h2");
  const eElements = e.querySelectorAll("li");
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${eElements.length}`);
});
