const styleForm = document.querySelector(".login-form");

styleForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //Для доступу до елементів форми використовуй властивість elements
  const {
    elements: { email, password },
  } = event.currentTarget;

  //валідація пустих полів
  if (email.value === "" || password.value === "") {
    return alert("Увага! Всі поля повинні бути заповнені");
  }
  //інформація про користувача
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  // очисти значення полів форми методом reset
  event.currentTarget.reset();
}
