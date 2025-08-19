class AddtocartAutotest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get signuploginbut() {
    return $("//a[normalize-space()='Signup / Login']");
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
  get loggedinImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get addtocartbut() {
    return $('//a[@data-product-id="1"]');
  }
  //get viewcartbut() {
  //return "";
  //}
  //get proceedtocheckbut() {
  //return "//a[@class='btn btn-default check_out']";
  //}

  async Addtocart(email: string, password: string) {
    await this.consentbut.click();
    await browser.pause(1000);
    await this.signuploginbut.click();
    await browser.pause(1000);
    await this.emailfield.setValue(email);
    await browser.pause(1000);
    await this.passwordfield.setValue(password);
    await browser.pause(1000);
    await this.loginbut.click();
    await browser.pause(1000);
    await this.loggedinImage.isDisplayed();
    await browser.pause(1000);
    await this.addtocartbut.click();
    await browser.pause(1000);
  }
}

export default new AddtocartAutotest();
