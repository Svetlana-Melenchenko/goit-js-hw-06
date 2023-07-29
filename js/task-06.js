const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", function () {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));

  const enteredValue = inputElement.value.trim().length;

  if (enteredValue === expectedLength) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
});
