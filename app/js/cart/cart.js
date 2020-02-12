// Client from Contentful ----------------|
const client = contentful.createClient({
  space: "dsfbqtjs2w7x",
  accessToken: "nGCoarI8AWuvW7D6RQNLtKDiALXngKQ47RYb5P8ELRo"
});

// Main container ---------------------------------------|
const mainContainer = document.querySelector("main");

// CartBtn from Navbar ---------------------------------------|
const cartBtn = document.getElementById("nav__icon--cart");
const cartMarker = document.getElementById("cart__marker");

// Cart component -----------------------------------------------------|
const closeCartBtn = document.getElementById("cart__closeBtn");
const emptyCartBtn = document.getElementById("cart__btn--empty");
const emptyCartWarning = document.querySelector(".cart__item--empty");
const cartDOM = document.getElementById("cart");
const cartOverlay = document.getElementById("cart__overlay");
const cartTotal = document.getElementById("cart__total--value");
const cartContent = document.getElementById("cart__content");

// Products page --------------------------------------------------|
const productsDOM = document.getElementById("produtos__gallery");

// Arrays -----------|
let cart = [];
let buttonsDOM = [];

// Excutes only when the DOM Content is loaded---------|
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  const produtoSobrePage = new ProdutoSobrePage();

  ui.setupAPP();

  products
    .getProducts()
    .then(products => {
      mainContainer.classList.contains("produtos") &&
        ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getGalleryItemBtns();
      ui.cardLogic();
      produtoSobrePage.getProductSelected();
    });

  if (mainContainer.classList.contains("produtoSobre")) {
    produtoSobrePage.displayProductInfo();
  }
});
