class productDetailstest {
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
  get productList() {
    return $('//a[contains(@href,"/brand_products/Polo")]');
  }
  get veiwProduct1stItem() {
    return $("//a[@href='/product_details/1' and contains(., 'View Product')]");
  }
  get productName() {
    return $('//h2[contains(text(),"Blue Top")]');
  }
  get productCategory() {
    return $("//p[normalize-space()='Category: Women > Tops']");
  }
  get productPrice() {
    return $('//span[contains(text(),"Rs. 500")]');
  }
  get productAvailability() {
    return $('//b[contains(text(),"Availabilitty")]');
  }
  get productCondition() {
    return $('//b[contains(text(),"Condition")]');
  }
  get productBrand() {
    return $('//b[contains(text(),"Brand")]');
  }
  async productDetails() {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.productbut.click();
    await browser.pause(1000);
    await this.allProducttext.isDisplayed();
    await browser.pause(1000);
    await this.productList.isDisplayed();
    await browser.pause(1000);
    await this.veiwProduct1stItem.click();
    await browser.pause(1000);
    await browser.getTitle();
    await browser.pause(1000);
    await this.productName.isDisplayed();
    await browser.pause(1000);
    await this.productCategory.isDisplayed();
    await browser.pause(1000);
    await this.productPrice.isDisplayed();
    await browser.pause(1000);
    await this.productAvailability.isDisplayed();
    await browser.pause(1000);
    await this.productCondition.isDisplayed();
    await browser.pause(1000);
    await this.productBrand.isDisplayed();
    await browser.pause(1000);
  }
}

export default new productDetailstest();
