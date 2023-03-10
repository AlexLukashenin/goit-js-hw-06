//Напиши скрипт, який для кожного елемента масиву ingredients:
//Створить окремий елемент <li>. Обов'язково використовуй метод
//document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const listItemsArr = [];

ingredients.forEach((ingredient) => {
  const listItemEl = document.createElement("li"); //створив елемент <li>
  listItemEl.textContent = ingredient; //додав текстовий вміст
  listItemEl.classList.add("item"); //додав клас item
  listItemsArr.push(listItemEl);
});

listEl.append(...listItemsArr); //вставив усі <li> за одну операцію у список ul#ingredients.
