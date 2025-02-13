function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
const color = widget.querySelector(".color");
color.textContent = randomColor;
})