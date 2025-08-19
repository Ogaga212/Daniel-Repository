class regBeforecheckout {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get enterAccountinfotext() {
    return $("//b[normalize-space()='Enter Account Information']");
  }
  get signUpheader() {
    return $("//a[normalize-space()='Signup / Login']");
  }
  get newusertext() {
    return $('//h2[contains(text(),"New User Signup")]');
  }

  get signUpName() {
    return $("//input[@placeholder='Name']");
  }

  get signUpEmail() {
    return $("//input[@data-qa='signup-email']");
  }

  get signUpbut() {
    return $("//button[normalize-space()='Signup']");
  }
  get titleMalebox() {
    return $("//input[@id='id_gender1']");
  }

  get titleFemaleBox() {
    return $("//input[@id='id_gender2']");
  }

  get nameField() {
    return $("//input[@id='name']");
  }

  get emailField() {
    return $("//input[@id='email']");
  }

  get passwordField() {
    return $("//input[@id='password']");
  }

  get dayOfbirth() {
    return $("//select[@id='days']");
  }

  get monthOfBirth() {
    return $("//select[@id='months']");
  }

  get yearOfBirth() {
    return $("//select[@id='years']");
  }

  get newsLetterTick() {
    return $("//input[@id='newsletter']");
  }

  get recieveSpecialTick() {
    return $("//input[@id='optin']");
  }

  get firstNameField() {
    return $("//input[@id='first_name']");
  }

  get lastNameField() {
    return $("//input[@id='last_name']");
  }

  get companyField() {
    return $("//input[@id='company']");
  }

  get address1Field() {
    return $("//input[@id='address1']");
  }

  get address2Field() {
    return $("//input[@id='address2']");
  }

  get countryField() {
    return $("//select[@id='country']");
  }

  get stateField() {
    return $("//input[@id='state']");
  }

  get cityField() {
    return $("//input[@id='city']");
  }

  get zipCodeField() {
    return $("//input[@id='zipcode']");
  }

  get mobileNumberField() {
    return $("//input[@id='mobile_number']");
  }

  get createAccountbut() {
    return $("//button[normalize-space()='Create Account']");
  }

  get actConfirmationMessage() {
    return $("//b[normalize-space()='Account Created!']");
  }

  get continuebut() {
    return $('//a[@data-qa="continue-button"]');
  }

  get loggedInAsText() {
    return $("//a[contains(text(), 'Logged in as')]");
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
      '//li[@class="address_address1 address_address2" and contains(., "apartment 709")]'
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
  get deleteActbut() {
    return $('//a[starts-with(@href, "/delete")]');
  }
  get accountDeletedtext() {
    return $("//b[normalize-space()='Account Deleted!']");
  }
  get continueafterdeletebut() {
    return $('//a[@data-qa="continue-button"]');
  }
  get billingaddresstext() {
    return $('//h3[text()="Your billing address"]');
  }

  async regbeforechecout(
    username: string,
    email: string,
    password: string,
    day: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    company: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string,
    msg: string,
    comment: string,
    cardname: string,
    cardnumber: string,
    cvc: string,
    mm: string,
    expyear: string
  ) {
    await this.homePageImage.isDisplayed();
    await this.signUpheader.click();
    await this.signUpName.setValue(username);
    await this.signUpEmail.setValue(email);
    await this.signUpbut.click();
    await this.enterAccountinfotext.isDisplayed();
    await this.titleMalebox.click();
    await this.passwordField.setValue(password);
    await this.dayOfbirth.selectByVisibleText(day);
    await this.monthOfBirth.selectByVisibleText(month);
    await this.yearOfBirth.selectByVisibleText(year);
    await this.newsLetterTick.click();
    await this.recieveSpecialTick.click();
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.companyField.setValue(company);
    await this.address1Field.setValue(address1);
    await this.address2Field.setValue(address2);
    await this.countryField.selectByVisibleText(country);
    await this.stateField.setValue(state);
    await this.cityField.setValue(city);
    await this.zipCodeField.setValue(zipcode);
    await this.mobileNumberField.setValue(mobileNumber);
    await this.createAccountbut.click();
    await expect(this.actConfirmationMessage).toHaveText(msg);
    await this.continuebut.click();
    await this.loggedInAsText.isDisplayed();
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
    await browser.pause(1000);
    await this.cardNumber.setValue(cardnumber);
    await browser.pause(1000);
    await this.cardCvcNumber.setValue(cvc);
    await browser.pause(1000);
    await this.cardExpMonth.setValue(mm);
    await browser.pause(1000);
    await this.cardExpYear.setValue(expyear);
    await browser.pause(1000);
    await this.confirmOrderbutton.click();
    await browser.pause(1000);
    await this.orderhasBeenPlacedmsg.isDisplayed();
    await browser.pause(1000);
    await this.deleteActbut.click();
    await this.accountDeletedtext.isDisplayed();
    await this.continueafterdeletebut.click();
  }

  async verifyaddressdetailsincheckout(
    username: string,
    email: string,
    password: string,
    day: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    company: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string,
    msg: string,
    comment: string,
    cardname: string,
    cardnumber: string,
    cvc: string,
    mm: string,
    expyear: string
  ) {
    await this.homePageImage.isDisplayed();
    await this.signUpheader.click();
    await this.signUpName.setValue(username);
    await this.signUpEmail.setValue(email);
    await this.signUpbut.click();
    await this.enterAccountinfotext.isDisplayed();
    await this.titleMalebox.click();
    await this.passwordField.setValue(password);
    await this.dayOfbirth.selectByVisibleText(day);
    await this.monthOfBirth.selectByVisibleText(month);
    await this.yearOfBirth.selectByVisibleText(year);
    await this.newsLetterTick.click();
    await this.recieveSpecialTick.click();
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.companyField.setValue(company);
    await this.address1Field.setValue(address1);
    await this.address2Field.setValue(address2);
    await this.countryField.selectByVisibleText(country);
    await this.stateField.setValue(state);
    await this.cityField.setValue(city);
    await this.zipCodeField.setValue(zipcode);
    await this.mobileNumberField.setValue(mobileNumber);
    await this.createAccountbut.click();
    await expect(this.actConfirmationMessage).toHaveText(msg);
    await this.continuebut.click();
    await this.loggedInAsText.isDisplayed();
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
    await this.billingaddresstext.isDisplayed();
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
    await browser.pause(1000);
    await this.cardNumber.setValue(cardnumber);
    await browser.pause(1000);
    await this.cardCvcNumber.setValue(cvc);
    await browser.pause(1000);
    await this.cardExpMonth.setValue(mm);
    await browser.pause(1000);
    await this.cardExpYear.setValue(expyear);
    await browser.pause(1000);
    await this.confirmOrderbutton.click();
    await browser.pause(1000);
    await this.orderhasBeenPlacedmsg.isDisplayed();
    await browser.pause(1000);
    await this.deleteActbut.click();
    await this.accountDeletedtext.isDisplayed();
    await this.continueafterdeletebut.click();
  }
}
export default new regBeforecheckout();
