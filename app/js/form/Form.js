// FORM ---------------------------------------------------------------------------------------------------
const formDOM = document.getElementById("form");

// FIELDS --------------------------------------------------------------------------------------------------
const name = document.getElementById("nome");
const email = document.getElementById("email");
const subject = document.getElementById("assunto");
const msg = document.getElementById("mensagem");

// ERROS --------------------------------------------------------------------------------------------------
let hasError = false;
let formError = true;

// FORM BUTTONS --------------------------------------------------------------------------------------------
const resetBtn = document.getElementById("form__btn--cancelar");
const submitBtn = document.getElementById("form__btn--enviar");

// FORM CLASS AND INSTANCE -----------------------------------------------------------------------------------------------
class MyForm {
  validate() {
    Name.validate();
    Email.validate();
    Subject.validate();
    Message.validate();
  }

  fieldIsEmpty(field, error, errorMsg) {
    if (field.value.length === 0) {
      error.innerHTML = errorMsg;
      hasError = true;
      formError = true;
    } else {
      this.clearErrors(error);
    }
  }

  fieldIsTooShort(charlength, field, error, errorMsg) {
    if (field.value.length < charlength) {
      error.innerHTML = errorMsg;
      hasError = true;
      formError = true;
    } else {
      this.clearErrors(error);
    }
  }

  borderColor(field) {
    if (hasError) {
      field.style.borderColor = "crimson";
    } else {
      field.style.borderColor = "white";

      field.addEventListener("focus", () => {
        field.style.borderColor = "rgb(72, 138, 224)";
      });
      field.addEventListener("blur", () => {
        field.style.borderColor = "white";
      });
    }
  }

  clearErrors(error) {
    error.innerHTML = "&nbsp";
    hasError = false;
    formError = false;
  }

  reset() {
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const errors = document.querySelectorAll(".erro");

    // Clears error messages
    errors.forEach(error => {
      this.clearErrors(error);
    });

    // Resets border color
    inputs.forEach(input => {
      this.borderColor(input);
    });

    this.borderColor(textarea);

    // Resets form
    form.reset();
  }
}
const myForm = new MyForm();

// EXECUTES ONLY IF PAGE LOADED IS 'CONTATO' ----------------------------------------------------------------
if (mainContainer.classList.contains("contato")) {
  formDOM.addEventListener("submit", event => {
    event.preventDefault();
  });

  resetBtn.addEventListener("click", () => {
    confirm("Tem certeza de que quer limpar o formulário?") && myForm.reset();
  });

  submitBtn.addEventListener("click", () => {
    myForm.validate();

    if (!formError) {
      setTimeout(() => {
        alert("Mensagem enviada!");
        myForm.reset();
      }, 500);
    }
  });

  setTimeout(() => {
    Name.onBlur();
    Email.onBlur();
    Subject.onBlur();
    Message.onBlur();

    Message.resizeTextarea();
  }, 100);
}
