class Message {
  static validate() {
    const error = document.getElementById("erro--mensagem");

    myForm.fieldIsEmpty(msg, error, "Digite sua mensagem");

    if (!hasError) {
      myForm.fieldIsTooShort(20, msg, error, "Sua mensagem é muito curta.");
    }

    myForm.borderColor(msg);
  }

  static resizeTextarea() {
    msg.addEventListener("focus", () => {
      msg.setAttribute("rows", "10");
    });
  }

  static onBlur() {
    msg.addEventListener("blur", () => {
      this.validate();
      !msg.value && msg.setAttribute("rows", "1");
    });
  }
}
