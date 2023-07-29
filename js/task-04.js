let counterValue = 0;

const valueSpan = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

updateCounterValue();
