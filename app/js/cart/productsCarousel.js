function productsCarousel() {
  setTimeout(() => {
    const elem = document.querySelector(".carousel");
    const flkty = new Flickity(elem, {
      cellAlign: "center",
      contain: false,
      autoPlay: true,
      wrapAround: true
    });
  }, 100);
}
