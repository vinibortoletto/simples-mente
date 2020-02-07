class UI {
  toggleCart() {
    cartOverlay.classList.toggle("toggleOverlay");
    cartDOM.classList.toggle("toggleCart");

    cart.length === 0
      ? (emptyCartWarning.style.display = "block")
      : (emptyCartWarning.style.display = "none");
  }

  displayProducts(products) {
    productsCarousel();

    let result = "";

    products.forEach(product => {
      result += `
        <div class="gallery__item">
          <figure>
            <img
              class="galleryItem__img"
              src=${product.image}
              alt="tênis"
            />
          </figure>

          <div class="galleryItem__text">
            <div>
              <h1 class="galleryItem__title">${product.title}</h1>
              <h2 class="galleryItem__price">
              R$ ${product.price}
              </h2>
            </div>

            <div class="galleryItem__btnBox">
              <button class="galleryItem__btn" data-id=${product.id}>
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      `;

      productsDOM.innerHTML = result;
    });
  }

  getGalleryItemBtns() {
    const buttons = [...document.querySelectorAll(".galleryItem__btn")];
    buttonsDOM = buttons;

    buttons.forEach(button => {
      let id = button.dataset.id;
      let inCart = cart.find(item => item.id === id);

      inCart &&
        (button.innerHTML = `
          <p>Item já adicionado</p>
          <p>Ver carrinho</p>
        `);

      button.addEventListener("click", () => {
        if (cart.find(item => item.id === id)) {
          this.toggleCart();
        } else {
          let cartItem = { ...Storage.getProduct(id), amount: 1 };

          cart = [...cart, cartItem];

          Storage.saveCart(cart);
          this.setCartValues(cart);
          this.addCartItem(cartItem);

          button.innerHTML = `
              <p>Item já adicionado</p>
              <p>Ver carrinho</p>
          `;

          this.toggleCart();
        }
      });
    });
  }

  setCartValues(cart) {
    let temporaryTotal = 0;
    let itemsTotal = 0;

    cart.map(item => {
      temporaryTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });

    cartTotal.innerText = parseFloat(temporaryTotal.toFixed(2));
    cartMarker.innerText = itemsTotal;
  }

  addCartItem(cartItem) {
    const div = document.createElement("div");
    div.classList.add("cart__item");

    const { title, price, id, image, amount } = cartItem;

    div.innerHTML = `
       <img src=${image} alt="produto" />

      <div>
        <h4>${title}</h4>
        <h5>R$ ${price}</h5>
        <button  class="item__remove" data-id=${id}>
          remover
        </button>
      </div>

      <div class="item__amountBox">
        <button>
          <i class="fas fa-chevron-up increaseQuantity" data-id=${id}></i>
        </button>

        <p>${amount}</p>

        <button>
          <i class="fas fa-chevron-down decreaseQuantity" data-id=${id}></i>
        </button>
      </div>
    `;

    cartContent.appendChild(div);
  }

  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cardLogic() {
    //  Emptys whole cart --------------------------|
    emptyCartBtn.addEventListener("click", () => {
      this.emptyCart();
    });

    cartContent.addEventListener("click", event => {
      //  Removes item from the cart --------------------------|
      if (event.target.classList.contains("item__remove")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        let cartItem = removeItem.parentElement.parentElement;

        cartItem.style.opacity = 0;

        setTimeout(() => {
          cartContent.removeChild(cartItem);
          this.removeItem(id);
        }, 200);
      }

      //  Increases the amount of an item ------------------------------|
      else if (event.target.classList.contains("increaseQuantity")) {
        let arrowUp = event.target;
        let id = arrowUp.dataset.id;
        const itemAmount = arrowUp.parentElement.nextElementSibling;

        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount + 1;

        itemAmount.innerText = tempItem.amount;

        this.setCartValues(cart);
        Storage.saveCart(cart);
      }

      //  Decreases the amount of an item ------------------------------|
      else if (event.target.classList.contains("decreaseQuantity")) {
        let arrowDown = event.target;
        let id = arrowDown.dataset.id;
        const itemAmount = arrowDown.parentElement.previousElementSibling;

        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount - 1;

        if (tempItem.amount > 0) {
          this.setCartValues(cart);
          itemAmount.innerText = tempItem.amount;

          Storage.saveCart(cart);
        } else {
          cartContent.removeChild(
            arrowDown.parentElement.parentElement.parentElement
          );
          this.removeItem(id);
        }
      }
    });
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);

    let button = this.getSingleBtn(id);
    button.innerHTML = `<i class='fas fa-cart-plus'></i>`;

    cart.length === 0 && (emptyCartWarning.style.display = "block");
  }

  emptyCart() {
    // Gets id of every item inside cart, then remove those items --|
    let itemsId = cart.map(item => item.id);
    itemsId.forEach(id => this.removeItem(id));

    // Removes all elements from HTML (except the imidiate one, which is the emptyCartWarning) --|
    while (cartContent.children.length > 1) {
      cartContent.removeChild(cartContent.children[1]);
    }

    this.toggleCart();
  }

  getSingleBtn(id) {
    return buttonsDOM.find(button => button.dataset.id === id);
  }

  setupAPP() {
    cartBtn.addEventListener("click", this.toggleCart);
    closeCartBtn.addEventListener("click", this.toggleCart);

    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);

    document.addEventListener("click", event => {
      event.target.classList.contains("cart__overlay") && this.toggleCart();
    });
  }
}
