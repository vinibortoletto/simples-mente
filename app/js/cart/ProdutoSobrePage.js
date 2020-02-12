class ProdutoSobrePage {
  displayProductInfo() {
    let productSelected = JSON.parse(localStorage.getItem("productSelected"));
    const productContainer = document.getElementById("produtoSobre");
    const productContent = document.createElement("section");

    productContent.classList.add("produtoSobre__product");

    productContent.innerHTML = `
        <section class="produtoSobre__product">
          <div class="product__gallery">
            <img src=${productSelected.image} alt="produto" />

            <div>
              <button class="active"></button>
              <button></button>
              <button></button>
            </div>
          </div>

          <div class="second_column_wrapper">
            <div class="product__btns">
              <input type="number" min="1" value="1" data-id=${productSelected.id}/>
              <button data-id=${productSelected.id}>adicionar ao carrinho</button>
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
}
