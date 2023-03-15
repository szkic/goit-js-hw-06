const textEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener(
  "input",
  (e) => (textEl.style.fontSize = `${e.currentTarget.value}px`)
);
