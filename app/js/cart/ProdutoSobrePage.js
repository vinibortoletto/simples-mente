class ProdutoSobrePage {
  displayProductInfo() {
    let productSelected = JSON.parse(localStorage.getItem("productSelected"));
    const productContainer = document.getElementById("produtoSobre");
    const productContent = document.createElement("section");

    productContent.classList.add("produtoSobre__product");

    productContent.innerHTML = `
        <section class="produtoSobre__product">
          <div class="product__gallery">
            <div class='img-wrapper'>
              <img id='productGallery__img' src=${productSelected.image} alt="produto" />
            </div>
            <div>
              <button class="productGallery__btn productGallery__btn--active"></button>
              <button class='productGallery__btn'></button>
              <button class='productGallery__btn'></button>
            </div>
          </div>

          <div class="second_column_wrapper">
            <div class="product__btns">
              <input id='product__btn--amount' type="number" min="1" value="1" data-id=${productSelected.id}/>
              <button id='product__btn--addToCart' data-id=${productSelected.id}>adicionar ao carrinho</button>
            </div>

            <div class="product__header">
              <h1>${productSelected.title}</h1>
              <h2>R$ ${productSelected.price}</h2>
            </div>

            <div class="product__description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui
                quis odit eveniet nisi molestias nihil in soluta neque omnis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, est.
              </p>
            </div>
          </div>
        </section>
      `;

    productContainer.appendChild(productContent);

    this.addToCartBtn(productSelected);
    this.imgGallery();
  }

  getProductSelected() {
    const galleryItemsImgs = document.querySelectorAll(".galleryItem__img");

    galleryItemsImgs.forEach(img => {
      img.addEventListener("click", () => {
        let imgId = img.dataset.id;

        let products = JSON.parse(localStorage.getItem("products"));

        let productSelected = products.find(product => product.id === imgId);

        Storage.saveProductSelected(productSelected);
      });
    });
  }

  addToCartBtn(productSelected) {
    const addToCartBtn = document.getElementById("product__btn--addToCart");
    const ui = new UI();

    addToCartBtn.addEventListener("click", () => {
      const amount = JSON.parse(
        document.getElementById("product__btn--amount").value
      );

      if (cart.find(product => product.id === productSelected.id)) {
        ui.toggleCart();
      } else {
        let cartItem = { ...productSelected, amount: amount };
        cart = [...cart, cartItem];

        Storage.saveCart(cart);
        ui.addCartItem(cartItem);
        ui.setCartValues(cart);
        ui.toggleCart();
      }
    });
  }

  imgGallery() {
    const galleryDots = document.querySelectorAll(".productGallery__btn");
    const galleryImg = document.getElementById("productGallery__img");

    galleryDots.forEach(dot => {
      dot.addEventListener("click", () => {
        // Removes all dots when any dot is clicked ---------------|
        galleryDots.forEach(dot => {
          dot.classList.contains("productGallery__btn--active") &&
            dot.classList.remove("productGallery__btn--active");

          // Image animation -----------------------------|
          galleryImg.classList.toggle("galleryImgAnimation");
        });

        // Add "active" to clicked dot -------------------|
        dot.classList.add("productGallery__btn--active");

        // Image animation -----------------------------|
        setTimeout(() => {
          galleryImg.classList.toggle("galleryImgAnimation");
        }, 200);
      });
    });
  }
}
