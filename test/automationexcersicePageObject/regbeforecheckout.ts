class regBeforecheckout {
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
  get registerLoginButton() {
    return $("//u[text()='Register / Login']");
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
    return $("//button[text()='Pay and Confirm Order']");
  }
  get orderhasBeenPlacedmsg() {
    return $(
      '//div[@class="alert-success alert" and contains(.,"Your order has been placed successfully!")]'
    );
  }
  async enterPaymentInfo(
    comment: string,
    cardname: string,
    cardnumber: string,
    cvc: string,
    mm: string,
    expyear: string
  ) {
    await this.commentField.setValue(comment);
    await this.placeHolder.click();
    await this.nameOnCard.setValue(cardname);
    await this.cardNumber.setValue(cardnumber);
    await this.cardCvcNumber.setValue(cvc);
    await this.cardExpMonth.setValue(mm);
    await this.cardExpYear.setValue(expyear);
  }

  async verifyaddressdetails() {
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
  }
}
export default new regBeforecheckout();
