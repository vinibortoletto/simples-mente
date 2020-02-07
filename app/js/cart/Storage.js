class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    // return (
    //   localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
    // );

    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")) //if there's items in localStorage, turn them into array and return
      : []; // else, return empty array
  }
}
