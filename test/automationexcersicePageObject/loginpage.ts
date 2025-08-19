class LoginAutotest {
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
  get deleteActbut() {
    return $('//a[starts-with(@href, "/delete")]');
  }
  get accountDeletedtext() {
    return $("//b[normalize-space()='Account Deleted!']");
  }
  get errorMsgtext() {
    return $('//p[contains(text(), "Your email or password is incorrect!")]');
  }
  get logOutbut() {
    return $('//a[@href="/logout"]');
  }

  async Login(email: string, password: string) {
    await this.homePageImage.isDisplayed();
    await this.signuploginbut.click();
    await this.loginText.isDisplayed();
    await this.emailfield.setValue(email);
    await this.passwordfield.setValue(password);
    if (await this.loginbut.isDisplayed()) {
      await this.loginbut.click();
    } else {
      await this.errorMsgtext.isDisplayed();
    }
    await this.loginpageImage.isDisplayed();
    await this.logInAstext.isDisplayed();
    await this.usernameText.isDisplayed();
    //await this.deleteActbut.click();
    //await this.accountDeletedtext.isDisplayed();
  }

  async errorLogin(email: string, password: string) {
    await this.homePageImage.isDisplayed();
    await this.signuploginbut.click();
    await this.loginText.isDisplayed();
    await this.emailfield.setValue(email);
    await this.passwordfield.setValue(password);
    await this.loginbut.click();
    await this.errorMsgtext.isDisplayed();
  }

  async logout(email: string, password: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.signuploginbut.click();
    await browser.pause(1000);
    await this.loginText.isDisplayed();
    await browser.pause(1000);
    await this.emailfield.setValue(email);
    await browser.pause(1000);
    await this.passwordfield.setValue(password);
    await browser.pause(1000);
    await this.loginbut.click();
    await browser.pause(1000);
    await this.loginpageImage.isDisplayed();
    await this.logInAstext.isDisplayed();
    await browser.pause(1000);
    await this.usernameText.isDisplayed();
    await browser.pause(1000);
    await this.logOutbut.click();
    await browser.pause(1000);
    await this.loginText.isDisplayed();
    await browser.pause(1000);
  }
}

export default new LoginAutotest();
