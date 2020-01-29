const msg = document.getElementById("mensagem");

// Resize textarea
msg.addEventListener("focus", () => {
  msg.setAttribute("rows", "10");
});
msg.addEventListener("blur", () => {
  !msg.value && msg.setAttribute("rows", "1");
  msgValidation();
});

// Textarea validation
function msgValidation() {
  const error = document.querySelector(".erro--mensagem");
  let hasError = false;

  if (msg.value.length === 0) {
    error.innerHTML = "Digite sua mensagem";
    hasError = true;
    formError = true;
  } else if (msg.value.length < 20) {
    error.innerHTML = "Sua mensagem é muito curta.";
    hasError = true;
    formError = true;
  } else {
    error.innerHTML = "&nbsp";
    hasError = false;
    formError = false;
  }

  hasError
    ? (msg.style.borderColor = "crimson")
    : (msg.style.borderColor = "white");
}
