class SignupAutotest {
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
  get errormsg() {
    return $('//p[contains(text(),"Email Address already exist!")]');
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
  get deleteActbut() {
    return $('//a[starts-with(@href, "/delete")]');
  }
  get accountDeletedtext() {
    return $("//b[normalize-space()='Account Deleted!']");
  }
  get continueafterdeletebut() {
    return $('//a[@data-qa="continue-button"]');
  }

  async signUp(
    username: string,
    email: string,
    // name: string,
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
    msg: string
  ) {
    await this.homePageImage.isDisplayed();
    await this.signUpheader.click();
    await browser.pause(1000);
    await this.signUpName.setValue(username);
    await browser.pause(1000);
    await this.signUpEmail.setValue(email);
    await browser.pause(1000);
    await this.signUpbut.click();
    await browser.pause(1000);
    await this.enterAccountinfotext.isDisplayed();
    await browser.pause(1000);
    await this.titleMalebox.click();
    await browser.pause(1000);
    await this.passwordField.setValue(password);
    await browser.pause(1000);
    await this.dayOfbirth.selectByVisibleText(day);
    await browser.pause(1000);
    await this.monthOfBirth.selectByVisibleText(month);
    await browser.pause(1000);
    await this.yearOfBirth.selectByVisibleText(year);
    await browser.pause(1000);
    await this.newsLetterTick.click();
    await browser.pause(1000);
    await this.recieveSpecialTick.click();
    await browser.pause(1000);
    await this.firstNameField.setValue(firstName);
    await browser.pause(1000);
    await this.lastNameField.setValue(lastName);
    await browser.pause(1000);
    await this.companyField.setValue(company);
    await browser.pause(1000);
    await this.address1Field.setValue(address1);
    await browser.pause(1000);
    await this.address2Field.setValue(address2);
    await browser.pause(1000);
    await this.countryField.selectByVisibleText(country);
    await browser.pause(1000);
    await this.stateField.setValue(state);
    await browser.pause(1000);
    await this.cityField.setValue(city);
    await browser.pause(1000);
    await this.zipCodeField.setValue(zipcode);
    await browser.pause(1000);
    await this.mobileNumberField.setValue(mobileNumber);
    await browser.pause(1000);
    await this.createAccountbut.click();
    await browser.pause(1000);
    await expect(this.actConfirmationMessage).toHaveText(msg);
    await browser.pause(1000);
    await this.continuebut.click();
    await browser.pause(1000);
    await this.loggedInAsText.isDisplayed();
    await browser.pause(1000);
    await this.usernameText.isDisplayed();
    await browser.pause(1000);
    await this.deleteActbut.click();
    await browser.pause(1000);
    await this.accountDeletedtext.isDisplayed();
    await browser.pause(1000);
    await this.continueafterdeletebut.click();
    await browser.pause(1000);
  }

  async singnUpexistemail(email: string, username: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.signUpheader.click();
    await browser.pause(1000);
    await this.newusertext.isDisplayed();
    await browser.pause(1000);
    await this.signUpName.setValue(username);
    await browser.pause(1000);
    await this.signUpEmail.setValue(email);
    await browser.pause(1000);
    await this.signUpbut.click();
    await browser.pause(1000);
    await this.errormsg.isDisplayed();
    await browser.pause(1000);
  }
}

export default new SignupAutotest();
