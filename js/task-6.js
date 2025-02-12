function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = parseInt(input.value);

  if (amount <= 1 && amount >= 100) {
    return;
  }

  boxes.innerHTML = "";

  let size = 30;

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    size +=10; 

    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }

  input.value = "";
}

destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
};
