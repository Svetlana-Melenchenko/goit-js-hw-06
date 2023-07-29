// function countCategories() {
//   const categoriesList = document.querySelectorAll("ul#categories>li.item");

//   console.log("Number of categories:", categoriesList.length);

//   categoriesList.forEach((category) => {
//     const categoryName = category.querySelector("h2").textContent;

//     const elements = category.querySelectorAll("ul > li").length;

//     console.log(`Category: ${categoryName}`);
//     console.dir(`Elements: ${elements}`);
//   });
// }

// countCategories();

function countCategories() {
  const categoriesList = document.getElementById("categories").children;
  console.log("Number of categories:", categoriesList.length);

  for (const category of categoriesList) {
    const categoryName = category.firstElementChild.textContent;
    const elements = category.lastElementChild.children.length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elements}`);
  }
}

countCategories();
