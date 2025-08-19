class addTocartTest2 {
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
  /*get firstProductImg() {
    return $(
      "//img[@src='/get_product_picture/1' and @alt='ecommerce website products']"
    );
  }
  */
  get firstProductbut() {
    return $('//a[@data-product-id="1" and contains(text(),"Add to cart")]');
  }
  get continueshopbut() {
    return $('//button[@class="btn btn-success close-modal btn-block"]');
  }
  /*get secondProductImg() {
    return $(
      "//img[@src='/get_product_picture/2' and @alt='ecommerce website products']"
    );
  }
  */
  get secondProductbut() {
    return $('//a[@data-product-id="2"]');
  }
  get viewcartbut() {
    return $("//u[text()='View Cart']");
  }
  get product1inCart() {
    return $('/tr[@id="product-1"]');
  }
  get product2inCart() {
    return $('//tr[@id="product-2"]');
  }
  get product1price() {
    return $('//td[@class="cart_price" and normalize-space()="Rs. 500"]');
  }
  get product1Quantity() {
    return $(
      "//tr[@id='product-1']//button[@class='disabled'][normalize-space()='1']"
    );
  }
  get product1total() {
    return $("//p[@class='cart_total_price' and normalize-space()='Rs. 500']");
  }
  get product2price() {
    return $('//td[@class="cart_price" and normalize-space()="Rs. 400"]');
  }
  get product2Quantity() {
    return $(
      "//tr[@id='product-2']//button[@class='disabled'][normalize-space()='1']"
    );
  }
  get product2total() {
    return $("//p[@class='cart_total_price' and normalize-space()='Rs. 400']");
  }
  get viewProduct1stitem() {
    return $(
      '//a[@href="/product_details/1" and contains(text(), "View Product")]'
    );
  }
  get newQuantity() {
    return $('//input[@type="number"]');
  }
  get addToCartBut() {
    return $('//button[@type="button" and contains(., "Add to cart")]');
  }
  get newViewCartBut() {
    return $('//a[@href="/view_cart" and contains(., "View Cart")]');
  }
  get newProductInfo() {
    return $('//a[@href="/product_details/1"]');
  }
  get cartQuantity() {
    return $('//button[@class="disabled" and contains(., "4")]');
  }

  async addtocart() {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.productbut.click();
    //  await browser.pause(1000);
    // await this.firstProductImg.moveTo();
    await browser.pause(1000);
    await this.firstProductbut.click();
    await browser.pause(1000);
    await this.continueshopbut.click();
    await browser.pause(1000);
    // await this.secondProductImg.moveTo();
    // await browser.pause(1000);
    await this.secondProductbut.click();
    await browser.pause(1000);
    await this.viewcartbut.click();
    await browser.pause(1000);
    await this.product1inCart.isDisplayed();
    await browser.pause(1000);
    await this.product2inCart.isDisplayed();
    await browser.pause(1000);
    await this.product1price.isDisplayed();
    await browser.pause(1000);
    await this.product1Quantity.isDisplayed();
    await browser.pause(1000);
    await this.product1total.isDisplayed();
    await browser.pause(1000);
    await this.product2price.isDisplayed();
    await browser.pause(1000);
    await this.product2Quantity.isDisplayed();
    await browser.pause(1000);
    await this.product2total.isDisplayed();
    await browser.pause(1000);
  }

  async quantityInCart(number: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.viewProduct1stitem.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/product_details/1"
    );
    await browser.pause(1000);
    await expect(browser).toHaveTitle("Automation Exercise - Product Details");
    await browser.pause(1000);
    await this.newQuantity.setValue(number);
    await browser.pause(1000);
    await this.addToCartBut.click();
    await browser.pause(1000);
    await this.newViewCartBut.click();
    await browser.pause(1000);
    await this.newProductInfo.isDisplayed();
    await browser.pause(1000);
    await this.cartQuantity.isDisplayed();
  }
}
export default new addTocartTest2();
