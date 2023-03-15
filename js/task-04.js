const inc = document.querySelector('button[data-action="increment"]');
const dec = document.querySelector('button[data-action="decrement"]');
const counter = document.getElementById("value");

let counterValue = 0;

const counterPrint = () => (counter.innerHTML = counterValue);

const plusClicked = () => counterPrint(counterValue++);
const minusClicked = () => counterPrint(counterValue--);

inc.addEventListener("click", plusClicked);
dec.addEventListener("click", minusClicked);
