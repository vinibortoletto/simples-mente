class Subject {
  static validate() {
    const error = document.getElementById("erro--assunto");

    myForm.fieldIsEmpty(subject, error, "Digite um assunto");
    myForm.borderColor(subject);
  }

  static onBlur() {
    subject.addEventListener("blur", () => {
      this.validate();
    });
  }
}
