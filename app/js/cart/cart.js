// Client from Contentful -----------------------------------------------------------------------------
const client = contentful.createClient({
  space: "dsfbqtjs2w7x",
  accessToken: "nGCoarI8AWuvW7D6RQNLtKDiALXngKQ47RYb5P8ELRo"
});

// CartBtn from Navbar --------------------------------------------------------------------------------
const cartBtn = document.getElementById("nav__icon--cart");
const cartMarker = document.getElementById("cart__marker"); //cartItems

// Cart component -------------------------------------------------------------------------------------
const closeCartBtn = document.getElementById("cart__closeBtn");
const emptyCartBtn = document.getElementById("cart__btn--empty");
const cartDOM = document.getElementById("cart");
const cartOverlay = document.getElementById("cart__overlay");
const cartTotal = document.getElementById("cart__total");
const cartContent = document.getElementById("cart__content");

// Products page --------------------------------------------------------------------------------------
const productsDOM = document.getElementById("produtos__gallery");

// Arrays ---------------------------------------------------------------------------------------------
let cart = [];
let buttonsDOM = [];

// Excutes only when the DOM Content is loaded---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();

  ui.setupAPP();
});
