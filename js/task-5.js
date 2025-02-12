function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
document.body.style.backgroundColor = getRandomHexColor();
const color = widget.querySelector(".color");
color.textContent = getRandomHexColor();
})