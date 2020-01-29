const email = document.getElementById("email");

email.addEventListener("blur", emailValidation);

function emailValidation() {
  const error = document.querySelector(".erro--email");
  let hasError = false;
  const emailRegex = /\S+@\S+\.\S+/;

  if (email.value.length === 0) {
    error.innerHTML = "Digite seu email";
    hasError = true;
    formError = true;
  } else if (!emailRegex.test(email.value)) {
    error.innerHTML = "Email inválido";
    hasError = true;
    formError = true;
  } else {
    error.innerHTML = "&nbsp";
    hasError = false;
    formError = false;
  }

  hasError
    ? (email.style.borderColor = "crimson")
    : (email.style.borderColor = "white");
}
