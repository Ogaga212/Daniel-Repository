class RemovefromcartTest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get addtoCartbut() {
    return $('//a[@data-product-id="2" and contains(., "Add to cart")]');
  }
  get continueshopbut() {
    return $('//button[contains(text(),"Continue Shopping")]');
  }
  get cartbut() {
    return $(
      '//a[@href = "/view_cart" and contains(., "Cart")] //i[@class="fa fa-shopping-cart"]'
    );
  }
  get xButton() {
    return $('//a[@class="cart_quantity_delete"]');
  }
  get cartIsemptymsg() {
    return $('//b[contains(.,"Cart is empty!")]');
  }
  async removeFromcart() {
    await this.homePageImage.isDisplayed();
    await this.addtoCartbut.click();
    await this.continueshopbut.click();
    await this.cartbut.click();
    await expect(browser).toHaveTitle("Automation Exercise - Checkout");
    await this.xButton.click();
    await this.cartIsemptymsg.isDisplayed();
  }
}

export default new RemovefromcartTest();
