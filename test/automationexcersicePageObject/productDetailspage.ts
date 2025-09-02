class productDetailstest {
  productBut: string;
  allProductText: string;
  productList: string;
  veiw1stProductButton: string;
  productAvailability: string;
  productCondition: string;
  productBrand: string;

  constructor() {
    this.productBut = '//a[ contains(@href,"/products")]';
    this.allProductText = '//h2[contains(text(),"All Products")]';
    this.productList = '//a[contains(@href,"/brand_products/Polo")]';
    this.veiw1stProductButton =
      "//a[@href='/product_details/1' and contains(., 'View Product')]";
    this.productAvailability = '//b[contains(text(),"Availabilitty")]';
    this.productCondition = '//b[contains(text(),"Condition")]';
    this.productBrand = '//b[contains(text(),"Brand")]';
  }

  async productDetails(
    name: string,
    category: string,
    price: string,
    availability: string,
    condition: string,
    brand: string
  ) {
    const productName = $(`//h2[normalize-space()="${name}"]`);
    await expect(productName).toBeDisplayed();
    const categoryofproduct = $(`//p[normalize-space()="${category}"]`);
    await expect(categoryofproduct).toBeDisplayed();
    const productprice = $(`//span[normalize-space()="${price}"]`);
    await expect(productprice).toBeDisplayed();
    const productAvailability = $(`//p[text()='${availability}']`);
    expect(await productAvailability.getText());
    const productCondition = $(`//p[text()='${condition}']`);
    expect(await productCondition.getText());
    const productBrand = $(`//p[text()='${brand}']`);
    expect(await productBrand.getText());
  }
}

export default new productDetailstest();
