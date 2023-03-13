const btn = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", () => {
  colorCode.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
