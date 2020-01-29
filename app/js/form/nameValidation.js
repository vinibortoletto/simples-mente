const name = document.getElementById("nome");

name.addEventListener("blur", nameValidation);

function nameValidation() {
  const error = document.querySelector(".erro--nome");
  let hasError = false;

  if (name.value.length === 0) {
    error.innerHTML = "Digite seu nome";
    hasError = true;
    formError = true;
  } else if (name.value.length < 3) {
    error.innerHTML = "Nome deve conter pelo menos 3 letras";
    hasError = true;
    formError = true;
  } else {
    error.innerHTML = "&nbsp";
    hasError = false;
    formError = false;
  }

  hasError
    ? (name.style.borderColor = "crimson")
    : (name.style.borderColor = "white");
}
