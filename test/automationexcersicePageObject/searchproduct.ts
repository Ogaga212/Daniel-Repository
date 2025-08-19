class searchProducttest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get productbut() {
    return $('//a[ contains(@href,"/products")]');
  }
  get allProducttext() {
    return $('//h2[contains(text(),"All Products")]');
  }
  get searchField() {
    return $('//input[@id="search_product"]');
  }
  get searchBut() {
    return $('//button[@id="submit_search"]');
  }
  get searchedProductText() {
    return $('//h2[normalize-space()="Searched Products"]');
  }

  async searchProduct(item: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.productbut.click();
    await browser.pause(1000);
    await this.allProducttext.isDisplayed();
    await browser.pause(1000);
    await this.searchField.setValue(item);
    await browser.pause(1000);
    await this.searchBut.click();
    await browser.pause(1000);
    await this.searchedProductText.isDisplayed();
    await browser.pause(1000);
  }
}
export default new searchProducttest();
