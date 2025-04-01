function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const spanForColor = document.querySelector("span.color");

button.addEventListener("click", (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanForColor.textContent = document.body.style.backgroundColor;
});
