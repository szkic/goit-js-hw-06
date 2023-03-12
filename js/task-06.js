const inputEl = document.getElementById("validation-input");
const defLength = document.querySelector('input[data-length="6"]');

inputEl.addEventListener("blur", (e) => {
  const inputLength = e.currentTarget.value.length;

  if (inputLength == defLength.dataset.length) {
    inputEl.setAttribute("class", "valid");
  } else {
    inputEl.setAttribute("class", "invalid");
  }
});
