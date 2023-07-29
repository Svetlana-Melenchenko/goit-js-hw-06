function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  const boxSize = 30;
  let currentSize = boxSize;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    currentSize += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}
document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = parseInt(
    document.querySelector('input[type="number"]').value,
    10
  );
  createBoxes(amount);
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
