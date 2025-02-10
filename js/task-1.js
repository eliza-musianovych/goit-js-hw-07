const categories = document.querySelector("#categories");

const categoriesItem = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`)

categoriesItem.forEach(item => {
    const title = item.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const elements = item.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`)
})