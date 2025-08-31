class signupAutotest {
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

  async signUp(
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
    msg: string
  ) {
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
  }

  async singnUpexistemail(email: string, username: string) {
    await this.signUpheader.click();
    await this.newusertext.isDisplayed();
    await this.signUpName.setValue(username);
    await this.signUpEmail.setValue(email);
    await this.signUpbut.click();
    await this.errormsg.isDisplayed();
  }
}

export default new signupAutotest();
