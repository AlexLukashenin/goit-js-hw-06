//отримую доступ до елементів
const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
//додаю слухача подій
fontSizeControlEl.addEventListener('input', event => {
    textEl.style.fontSize = `${event.target.value}px`
});

