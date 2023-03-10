const inputValidationEl = document.querySelector("#validation-input");
//добавив слухача подій
inputValidationEl.addEventListener("blur", (event) => {
  if (event.target.value.length == inputValidationEl.getAttribute("data-length")) {
    inputValidationEl.classList.add("valid");
    //обнулить за потреби клас
    inputValidationEl.classList.remove("invalid");
  }
  else {
      inputValidationEl.classList.add("invalid");
      //обнулить за потреби клас
      inputValidationEl.classList.remove("valid");
    }
});
