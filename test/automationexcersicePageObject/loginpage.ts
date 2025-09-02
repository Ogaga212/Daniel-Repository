class LoginAutotest {
  signupLoginBtn: string;
  loginText: string;
  emailField: string;
  passwordField: string;
  loginBtn: string;
  loginPageImage: string;
  errorMsgText: string;
  logoutBtn: string;
  deleteActBtn: string;
  accountDeletedText: string;
  continueAfterDeleteBtn: string;
  homePageImage: string;
  consentBtn: string;
  loggedInAsText: string;
  usernameText: string;

  constructor() {
    this.signupLoginBtn = "//a[normalize-space()='Signup / Login']";
    this.loginText = '//h2[text()="Login to your account"]';
    this.emailField = "//input[@data-qa='login-email']";
    this.passwordField = "//input[@placeholder='Password']";
    this.loginBtn = "//button[normalize-space()='Login']";
    this.loginPageImage =
      "//div[@class='item active']//img[@alt='demo website for practice']";
    this.errorMsgText =
      '//p[contains(text(), "Your email or password is incorrect!")]';
    this.logoutBtn = '//a[@href="/logout"]';
    this.deleteActBtn = '//a[starts-with(@href, "/delete")]';
    this.accountDeletedText = "//b[normalize-space()='Account Deleted!']";
    this.continueAfterDeleteBtn = '//a[@data-qa="continue-button"]';
    this.homePageImage =
      "//div[@class='item active']//img[@alt='demo website for practice']";
    this.consentBtn = "//p[text()='Consent']";
    this.loggedInAsText = "//a[contains(text(), 'Logged in as')]";
    this.usernameText = "//b[text()]";
  }

  
  async deleteAccount() {
    await $(this.deleteActBtn).click();
  }

  async checkHomePageIsVisible() {
    await browser.url("https://automationexercise.com");
    await $(this.consentBtn).click();
    await expect($(this.homePageImage)).toBeDisplayed();
  }

  async userLoggedIn(expectedName: string) {
    await expect($(this.loggedInAsText)).toBeDisplayed();
    const actualName = await $(this.usernameText).getText();
    expect(actualName).toBe(expectedName);
  }

  async login(email: string, password: string) {
    await $(this.signupLoginBtn).click();
    await expect($(this.loginText)).toBeDisplayed();

    await $(this.emailField).setValue(email);
    await $(this.passwordField).setValue(password);

    if (await $(this.loginBtn).isDisplayed()) {
      await $(this.loginBtn).click();
    } else {
      await expect($(this.errorMsgText)).toBeDisplayed();
    }
  }
}

export default new LoginAutotest();
