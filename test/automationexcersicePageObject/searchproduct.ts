class searchProducttest {
  productButton: string;
  allProductText: string;
  searchField: string;
  searchButton: string;
  searchedProductText: string;
  productRelatedToSearch: string;

  constructor() {
    this.productButton = '//a[ contains(@href,"/products")]';
    this.allProductText = '//h2[contains(text(),"All Products")]';
    this.searchField = '//input[@id="search_product"]';
    this.searchButton = '//button[@id="submit_search"]';
    this.searchedProductText = '//h2[normalize-space()="Searched Products"]';
    this.productRelatedToSearch =
      '//div[@class="productinfo text-center"]//p[contains(text(),"Blue Top")]';
  }

  async searchProduct(item: string) {
    await $(this.searchField).setValue(item);
    await $(this.searchButton).click();
    await $(this.searchedProductText).isDisplayed();
  }
}
export default new searchProducttest();
