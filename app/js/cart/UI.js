class UI {
  toggleCart() {
    cartDOM.classList.toggle("toggleCart");
    cartOverlay.classList.toggle("toggleOverlay");
  }

  setupAPP() {
    cartBtn.addEventListener("click", this.toggleCart);
    closeCartBtn.addEventListener("click", this.toggleCart);
  }
}
