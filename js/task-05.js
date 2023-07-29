const nameInput = document.getElementById("name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value;

  if (inputValue.trim() !== "") {
    nameOutput.textContent = inputValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

//  ??Пробіли замість імені  .trim()
