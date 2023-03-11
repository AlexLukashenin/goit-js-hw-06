//пошук елементів
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector("#name-output");
//добавляю слухача
inputEl.addEventListener('input', event => {
  //присвоєння значення input в output
  outputEl.textContent = event.target.value;
  
  if (event.target.value === "") {
    outputEl.textContent = "Anonymous";
  }
});