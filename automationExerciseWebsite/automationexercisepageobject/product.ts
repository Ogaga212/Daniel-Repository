class productPage {
  productBut: string;
  allProductText: string;
  productList: string;
  veiw1stProductButton: string;
  productAvailability: string;
  productCondition: string;
  productBrand: string;
  searchedProductText: string;
  searchButton: string;
  searchField: string;
  firstProductbut: string;
  continueshopbut: string;
  secondProductbut: string;
  viewcartbut: string;
  addToCartBut: string;
  addsearch: string;

  constructor() {
    this.productBut = '//a[ contains(@href,"/products")]';
    this.allProductText = '//h2[contains(text(),"All Products")]';
    this.productList = '//a[contains(@href,"/brand_products/Polo")]';
    this.veiw1stProductButton =
      "//a[@href='/product_details/1' and contains(., 'View Product')]";
    this.productAvailability = '//b[contains(text(),"Availabilitty")]';
    this.productCondition = '//b[contains(text(),"Condition")]';
    this.productBrand = '//b[contains(text(),"Brand")]';
    this.searchedProductText = '//h2[normalize-space()="Searched Products"]';
    this.searchField = '//input[@id="search_product"]';
    this.searchButton = '//button[@id="submit_search"]';
    this.firstProductbut =
      '//a[@data-product-id="1" and contains(text(),"Add to cart")]';
    this.continueshopbut =
      '//button[@class="btn btn-success close-modal btn-block"]';
    this.secondProductbut = '//a[@data-product-id="2"]';
    this.viewcartbut = "//u[text()='View Cart']";
    this.addToCartBut =
      '//button[@type="button" and contains(., "Add to cart")]';
    this.addsearch =
      "//div[@class='overlay-content']//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart']";
  }

  async searchProduct(item: string) {
    await $(this.searchField).setValue(item);
    await $(this.searchButton).click();
  }

  async verifyOnProductsPage() {
    await expect(browser).toHaveTitle("Automation Exercise - All Products");
    await expect($(this.allProductText)).toBeDisplayed();
  }
  async viewProduct(item: string) {
    const viewAProduct = `//a[@href='/product_details/${item}' and contains(., 'View Product')]`;
    await $(viewAProduct).click();
  }
  async viewSearchedProductsText() {
    await expect($(this.searchedProductText)).toBeDisplayed();
  }
  async verifySearchedProduct(item: string) {
    const productRelatedToSearch = `//div[@class="productinfo text-center"]//p[contains(text(),"${item}")]`;
    await expect($(productRelatedToSearch)).toBeDisplayed();
  }
  async hoverOver1stProduct() {
    await $(this.firstProductbut).moveTo();
  }
  async addProductToCart(item: string) {
    const producttAdd = `//a[@data-product-id="${item}" and contains(text(),"Add to cart")]`;
    await $(producttAdd).click();
  }
  async continueShopping() {
    await $(this.continueshopbut).click();
  }
  async hoverOver2ndProduct() {
    await $(this.secondProductbut).scrollIntoView();
    await $(this.secondProductbut).moveTo();
  }

  async viewCart() {
    await $(this.viewcartbut).click();
  }
  async clickAddToCart() {
    await $(this.addToCartBut).click();
  }
}

export default new productPage();
