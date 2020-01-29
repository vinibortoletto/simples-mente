const subject = document.getElementById("assunto");

subject.addEventListener("blur", subjectValidation);

function subjectValidation() {
  const error = document.querySelector(".erro--assunto");
  let hasError = false;

  if (subject.value.length === 0) {
    error.innerHTML = "Digite um assunto";
    hasError = true;
    formError = true;
  } else {
    error.innerHTML = "&nbsp";
    hasError = false;
    formError = false;
  }

  hasError
    ? (subject.style.borderColor = "crimson")
    : (subject.style.borderColor = "white");
}
