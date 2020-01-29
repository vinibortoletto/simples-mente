const form = document.getElementById("form");
const resetBtn = document.querySelector(".form__btn--cancelar");
const submitBtn = document.querySelector(".form__btn--enviar");

let formError = true;

form.addEventListener("submit", event => {
  event.preventDefault();
});

submitBtn.addEventListener("click", () => {
  if (formError) {
    formValidation();
  } else {
    setTimeout(() => {
      alert("Mensagem enviada!");
      form.reset();
      msg.setAttribute("rows", "1");
    }, 500);
  }
});

resetBtn.addEventListener("click", resetForm);

function formValidation() {
  nameValidation();
  emailValidation();
  subjectValidation();
  msgValidation();
}

function resetForm() {
  if (confirm("Tem certeza de que quer limpar o formulário?")) {
    const errors = document.querySelectorAll(".erro");

    errors.forEach(error => {
      error.innerHTML = "&nbsp";
    });

    name.style.borderColor = "white";
    email.style.borderColor = "white";
    subject.style.borderColor = "white";
    msg.style.borderColor = "white";
    msg.setAttribute("rows", "1");

    form.reset();
  }
}
