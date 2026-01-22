/* ==================== CHAPTER 7 : WALKING THE DOM ==================== */

// Getting a element and applying styles
// It returns a collection of <nav>, so access the first one like a array[0].
let navbar = document.querySelector("nav");
navbar.firstElementChild.style.backgroundColor = "red";

// Change first and last <li> of a list
let list = document.querySelector("ul");
list.firstElementChild.style.color = "blueviolet";
list.lastElementChild.style.color = "blue";

// Change BG of all <li>
// 'list.children' provides collection, so loop through to apply styles to all children
let listItems = list.querySelectorAll("li");
// Looping through collection of items of list
for (let index = 0; index < listItems.length; index++) {
  listItems[index].style.backgroundColor = "aqua";
}

// Get the current date and time with TimeZone info
const now = new Date();

// 2. Individual components
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are 0-based (0 = January)
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// 3. Formatted as YYYY-MM-DD
console.log(
  `Site loaded at :\n${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
);

// 4. Localized date string
console.log("Locale Date:", now.toLocaleDateString());

/* DATA ATTRIBUTE */
