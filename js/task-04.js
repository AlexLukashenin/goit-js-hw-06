//створив змінну
let currentCounterValue = 0;
//знайшов елементи
let counter = document.querySelector("#value");
const btnAddsCounterValue = document.querySelector(
  'button[data-action="increment"]'
);
const btnDecrementCounter = document.querySelector(
  'button[data-action="decrement"]'
);
//додав слухачів подій
btnDecrementCounter.addEventListener("click", () => {
  currentCounterValue -= 1;
  counter.textContent = currentCounterValue;
});

btnAddsCounterValue.addEventListener("click", () => {
  currentCounterValue += 1;
  counter.textContent = currentCounterValue;
});
