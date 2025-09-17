class loginPage {
  usernameText: string;
  loginText: string;
  emailField: string;
  passwordField: string;
  loginBtn: string;
  errorMsgText: string;

  constructor() {
    this.usernameText = "//b[text()]";
    this.loginText = '//h2[text()="Login to your account"]';
    this.emailField = "//input[@data-qa='login-email']";
    this.passwordField = "//input[@placeholder='Password']";
    this.loginBtn = "//button[normalize-space()='Login']";
    this.errorMsgText =
      '//p[contains(text(), "Your email or password is incorrect!")]';
  }

  async LoginToAccountText() {
    await expect($(this.loginText)).toBeDisplayed();
  }

  async fillInLoginDetails(email: string, password: string) {
    await $(this.emailField).setValue(email);
    await $(this.passwordField).setValue(password);
  }

  async clickLoginButton() {
    await $(this.loginBtn).click();
  }
  async verifyErrorText() {
    await expect($(this.errorMsgText)).toBeDisplayed();
  }

  async verifyloginPage() {
    await expect(browser).toHaveUrl("https://automationexercise.com/login");
  }
}
export default new loginPage();
