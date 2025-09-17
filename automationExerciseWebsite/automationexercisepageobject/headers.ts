class headers {
  homeBut: string;
  signupLoginBtn: string;
  contactUsBut: string;
  testCaseBut: string;
  testCaseWord: string;
  productButton: string;
  subscribeButton: string;
  inputEmailField: string;
  subscriptionText: string;
  consentButton: string;
  deleteActBtn: string;
  accountDeletedText: string;
  logoutBtn: string;
  loggedInAsText: string;
  cartButton: string;

  constructor() {
    this.homeBut = '//span[contains(text(),"Home")]';
    this.signupLoginBtn = "//a[normalize-space()='Signup / Login']";
    this.contactUsBut = "//a[contains(@href, '/contact_us')]";
    this.testCaseBut = "//a[text()=' Test Cases']";
    this.testCaseWord = '//b[contains(text(),"Test Cases")]';
    this.productButton = '//a[ contains(@href,"/products")]';
    this.subscribeButton = '//button[@id="subscribe"]';
    this.inputEmailField = '//input[@id="susbscribe_email"]';
    this.subscriptionText = '//h2[normalize-space()="Subscription"]';
    this.consentButton = "//p[text()='Consent']";
    this.deleteActBtn = '//a[starts-with(@href, "/delete")]';
    this.accountDeletedText = "//b[normalize-space()='Account Deleted!']";
    this.logoutBtn = '//a[@href="/logout"]';
    this.loggedInAsText = "//a[contains(text(), 'Logged in as')]";
    this.cartButton = '//a[contains(text()," Cart")]';
  }

  async openWebPage() {
    await browser.url("https://automationexercise.com");
  }

  async acceptConsent() {
    await $(this.consentButton).click();
  }
  async checkHomePageIsVisible() {
    await expect(browser).toHaveTitle("Automation Exercise");
  }

  async gotoHomePage() {
    await $(this.homeBut).click();
  }
  async goToSignupLoginPage() {
    await $(this.signupLoginBtn).click();
  }
  async goToContactUsPage() {
    await $(this.contactUsBut).click();
  }
  async goToCartPage() {
    await $(this.cartButton).click();
  }
  async goToTestCasesPage() {
    await $(this.testCaseBut).click();
  }
  async verifytestCasesPage() {
    await expect($(this.testCaseWord)).toBeDisplayed();
  }
  async goToProductsPage() {
    await $(this.productButton).click();
  }

  async verifyUserLoggedIn(expectedName: string) {
    await expect($(this.loggedInAsText)).toBeDisplayed();
    const actualName = $(`//b[text()='${expectedName}']`);
    await expect(actualName).toBeDisplayed();
  }

  async deleteAccount() {
    await $(this.deleteActBtn).click();
  }
  async verifyAccountDeleted() {
    await expect($(this.accountDeletedText)).toBeDisplayed();
  }
  async logoutFromAccount() {
    await $(this.logoutBtn).click();
  }
  async fillInSubscribeTextField(email: string) {
    await $(this.inputEmailField).setValue(email);
  }
  async clickSubscribeButton() {
    await $(this.subscribeButton).click();
  }
  async verifySubscribedText() {
    await expect($(this.subscriptionText)).toBeDisplayed();
  }
}
export default new headers();
