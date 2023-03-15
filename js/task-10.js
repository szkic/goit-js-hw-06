const boxEls = document.getElementById("boxes");
const controlsEl = document.getElementById("controls");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const inputEl = controlsEl.firstElementChild;
let dimensions = 20;

// CHANGE COLOR
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// CREATE ELEMENTS
const createBoxes = (amount) => {
  amount = +inputEl.value;

  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");

    createBox.setAttribute(
      "style",
      `background-color: ${getRandomHexColor()}; width: ${(dimensions += 10)}px; height: ${dimensions}px; margin-top: 20px`
    );

    boxEls.append(createBox);
  }
};
createBtn.addEventListener("click", createBoxes);

// DELETE ELEMENTS
const destroyBoxes = () => (boxEls.innerHTML = "");
destroyBtn.addEventListener("click", () => destroyBoxes());
