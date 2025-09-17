class homePage {
  subscribeButton: string;
  inputEmailField: string;
  subscriptionText: string;
  scrollupbut: string;
  fullfledgedmsg: string;
  subscribedTest: string;
  recommendtext: string;
  recommednedProducts: string;

  constructor() {
    this.subscribeButton = '//button[@id="subscribe"]';
    this.inputEmailField = '//input[@id="susbscribe_email"]';
    this.subscriptionText = '//h2[normalize-space()="Subscription"]';
    this.fullfledgedmsg =
      '//h2[text()="Full-Fledged practice website for Automation Engineers"]';
    this.scrollupbut = '//a[@id="scrollUp"]';
    this.subscribedTest =
      '//div[text()="You have been successfully subscribed!"]';
    this.recommendtext = "//h2[text()='recommended items']";
    this.recommednedProducts =
      "//div[@class='item active']//p[contains(text(),'Blue Top')]";
  }
  async checkHomePageIsVisible() {
    await expect(browser).toHaveTitle("Automation Exercise");
  }
  async verifySubscriptionText() {
    await expect($(this.subscriptionText)).toBeDisplayed();
  }

  async fillInEmail(email: string) {
    await $(this.inputEmailField).setValue(email);
  }
  async clickSubscribeButton() {
    await $(this.subscribeButton).click();
  }

  async verifySubscribedText() {
    expect($(this.subscribedTest)).toBeDisplayed();
  }

  async verifyRecommendItemText() {
    await $(this.recommendtext).scrollIntoView();
  }

  async verifyRecommendedProducts() {
    await expect($(this.recommednedProducts)).toBeDisplayed();
  }

  async verifysSubscriptionText() {
    await $(this.subscriptionText).scrollIntoView();
  }
  async clickScrollupButton() {
    await $(this.scrollupbut).click();
  }
  async scrollToFooter() {
    await $(this.subscriptionText).scrollIntoView();
  }

  async scrollToFullfledgedmsg() {
    await $(this.fullfledgedmsg).scrollIntoView();
  }
  async viewFullfledgedmsg() {
    await expect($(this.fullfledgedmsg)).toBeDisplayed();
  }
}
export default new homePage();
