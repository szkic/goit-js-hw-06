const inc = document.querySelector('button[data-action="increment"]');
const dec = document.querySelector('button[data-action="decrement"]');
const counter = document.getElementById("value");

let counterValue = 0;

const plusClicked = () => {
  counterValue++;
  counter.innerHTML = counterValue;
};

const minusClicked = () => {
  counterValue--;
  counter.innerHTML = counterValue;
};

inc.addEventListener("click", plusClicked);
dec.addEventListener("click", minusClicked);
