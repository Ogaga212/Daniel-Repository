class loginbeforeCheckout {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get signuploginbut() {
    return $("//a[normalize-space()='Signup / Login']");
  }
  get loginText() {
    return $('//h2[text()="Login to your account"]');
  }
  get emailfield() {
    return $("//input[@data-qa='login-email']");
  }
  get passwordfield() {
    return $("//input[@placeholder='Password']");
  }
  get loginbut() {
    return $("//button[normalize-space()='Login']");
  }
  get loginpageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get logInAstext() {
    return $('//a[contains(text(), "Logged in as")]');
  }
  get usernameText() {
    return $('//b[contains(text(), "dan")]');
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
  get proceedtocheckoutbut() {
    return $('//a[contains(.,"Proceed To Checkout")]');
  }
  get yourdelvadressInfo() {
    return $('//h3[contains(.,"Your delivery address")]');
  }
  get deladdressfirstName() {
    return $('//li[@class="address_firstname address_lastname"]');
  }
  get deladdcompname() {
    return $(
      '//li[@class="address_address1 address_address2" and contains(., "ii")]'
    );
  }
  get deladdresline1() {
    return $(
      '//li[@class="address_address1 address_address2" and contains(., "709")]'
    );
  }
  get delcitystatepostcode() {
    return $('//li[@class="address_city address_state_name address_postcode"]');
  }
  get deladdcountry() {
    return $('//li[@class="address_country_name"]');
  }
  get deladdmobile() {
    return $('//li[@class="address_phone"]');
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
  get commentField() {
    return $('//textarea[@class="form-control"]');
  }
  get placeHolder() {
    return $('//a[@href="/payment"]');
  }
  get nameOnCard() {
    return $('//input[@data-qa="name-on-card"]');
  }
  get cardNumber() {
    return $('//input[@data-qa="card-number"]');
  }
  get cardCvcNumber() {
    return $('//input[@data-qa="cvc"]');
  }
  get cardExpMonth() {
    return $('//input[@data-qa="expiry-month"]');
  }
  get cardExpYear() {
    return $('//input[@data-qa="expiry-year"]');
  }
  get confirmOrderbutton() {
    return $('//button[@data-qa="pay-button"]');
  }
  get orderhasBeenPlacedmsg() {
    return $(
      '//div[@class="alert-success alert" and contains(.,"Your order has been placed successfully!")]'
    );
  }
  async loginbefchecout(
    email: string,
    password: string,
    comment: string,
    cardname: string,
    cardnumber: string,
    cvc: string,
    mm: string,
    expyear: string
  ) {
    await this.homePageImage.isDisplayed();
    await this.signuploginbut.click();
    await this.loginText.isDisplayed();
    await this.emailfield.setValue(email);
    await this.passwordfield.setValue(password);
    await this.loginbut.click();
    await this.loginpageImage.isDisplayed();
    await this.logInAstext.isDisplayed();
    await this.usernameText.isDisplayed();
    await this.addtoCartbut.click();
    await this.continueshopbut.click();
    await this.cartbut.click();
    await expect(browser).toHaveTitle("Automation Exercise - Checkout");
    await this.proceedtocheckoutbut.click();
    await this.yourdelvadressInfo.isDisplayed();
    await this.deladdressfirstName.isDisplayed();
    await this.deladdcompname.isDisplayed();
    await this.deladdresline1.getValue();
    await this.delcitystatepostcode.getValue();
    await this.deladdcountry.getValue();
    await this.deladdmobile.getValue();
    await this.productName.isDisplayed();
    await this.productCategory.isDisplayed();
    await this.productPrice.isDisplayed();
    await this.productAvailability.isDisplayed();
    await this.productCondition.isDisplayed();
    await this.productBrand.isDisplayed();
    await this.commentField.setValue(comment);
    await this.placeHolder.click();
    await this.nameOnCard.setValue(cardname);
    await this.cardNumber.setValue(cardnumber);
    await this.cardCvcNumber.setValue(cvc);
    await this.cardExpMonth.setValue(mm);
    await this.cardExpYear.setValue(expyear);
    await this.confirmOrderbutton.click();
    await this.orderhasBeenPlacedmsg.isDisplayed();
  }
}
export default new loginbeforeCheckout();
