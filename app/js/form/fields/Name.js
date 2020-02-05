class Name {
  static validate() {
    const error = document.getElementById("erro--nome");

    myForm.fieldIsEmpty(name, error, "Digite seu nome");

    if (!hasError) {
      myForm.fieldIsTooShort(
        3,
        name,
        error,
        "Nome deve conter pelo menos 3 letras"
      );
    }

    myForm.borderColor(name);
  }

  static onBlur() {
    name.addEventListener("blur", () => {
      this.validate();
    });
  }
}
