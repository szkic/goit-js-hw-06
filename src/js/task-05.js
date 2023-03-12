const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (e) => {
  outputEl.textContent = e.currentTarget.value;

  if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
