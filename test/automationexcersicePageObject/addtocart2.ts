class addTocartTest2 {
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
  get product1deletekey() {
    return $("//tr[@id='product-1']//i[@class='fa fa-times']");
  }
  get product2deletekey() {
    return $("//tr[@id='product-2']//i[@class='fa fa-times']");
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
  get firstProductInfo() {
    return $('//a[@href="/product_details/1"]');
  }
  get secondProductInfo() {
    return $('//a[@href="/product_details/2"]');
  }
  get cartQuantity1() {
    return $(
      '//tr[@id="product-1"]//td[contains(@class,"cart_quantity")]//button'
    );
  }
  get cartQuantity2() {
    return $(
      '//tr[@id="product-2"]//td[contains(@class,"cart_quantity")]//button'
    );
  }

  async addtocart() {
    await this.product1inCart.isDisplayed();
    await this.product2inCart.isDisplayed();
    await this.product1price.isDisplayed();
    await this.product1Quantity.isDisplayed();
    await this.product1total.isDisplayed();
    await this.product2price.isDisplayed();
    await this.product2Quantity.isDisplayed();
    await this.product2total.isDisplayed();
    await this.product1deletekey.click();
    await this.product2deletekey.click();
  }

  async quantityInCart(number: string) {
    await this.viewProduct1stitem.click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/product_details/1"
    );
    await expect(browser).toHaveTitle("Automation Exercise - Product Details");
    await this.newQuantity.setValue(number);
    await this.addToCartBut.click();
    await this.newViewCartBut.click();
    await this.firstProductInfo.isDisplayed();
    const quantityforproduct1 = await this.cartQuantity1.getText();
    expect(quantityforproduct1).toBe(number);
    await browser.pause(1000);
  }
}
export default new addTocartTest2();
