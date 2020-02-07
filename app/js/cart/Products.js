class Products {
  async getProducts() {
    try {
      let contentful = await client.getEntries({
        content_type: "product"
      });

      let products = contentful.items;

      products = products.map(product => {
        const { id } = product.sys;
        const { title, price } = product.fields;
        const image = product.fields.image.fields.file.url;

        return { id, title, price, image };
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}
