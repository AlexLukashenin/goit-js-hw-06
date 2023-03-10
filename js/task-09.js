function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//пошук елементів
const bodyEl = document.querySelector("body");
const changeColorBTN = document.querySelector("button.change-color");
const spanColorEl = document.querySelector("span.color");
//додаю слухача подій
changeColorBTN.addEventListener("click", () => {
  let color = getRandomHexColor();
  //змінює кольори фону елемента <body>
  bodyEl.style.backgroundColor = color;
  //виводить значення кольору в span.color.
  spanColorEl.textContent = color;
});
