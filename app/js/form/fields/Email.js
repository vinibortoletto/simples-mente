class Email {
  static validate() {
    const error = document.getElementById("erro--email");
    const emailRegex = /\S+@\S+\.\S+/;

    myForm.fieldIsEmpty(email, error, "Digite seu email");

    if (!hasError && !emailRegex.test(email.value)) {
      error.innerHTML = "Email inválido";
      hasError = true;
      formError = true;
    }

    myForm.borderColor(email);
  }

  static onBlur() {
    email.addEventListener("blur", () => {
      this.validate();
    });
  }
}
