class subscriptionTest {
  subscriptionText: string;
  inputEmailField: string;
  subscribeButton: string;
  successText: string;
  cartButton: string;

  constructor() {
    this.subscriptionText = '//h2[normalize-space()="Subscription"]';
    this.inputEmailField = '//input[@id="susbscribe_email"]';
    this.subscribeButton = '//button[@id="subscribe"]';
    this.successText = '//div[@id="success-subscribe"]';
    this.cartButton = '//a[contains(text()," Cart")]';
  }

  async fillInSubscribeTextField(email: string) {
    await $(this.inputEmailField).setValue(email);
    await $(this.subscribeButton).click();
  }
}
export default new subscriptionTest();
