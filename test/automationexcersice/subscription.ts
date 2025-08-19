class subscriptionTest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get subscriptionText() {
    return $('//h2[normalize-space()="Subscription"]');
  }
  get inputEmailField() {
    return $('//input[@id="susbscribe_email"]');
  }
  get subscribebut() {
    return $('//button[@id="subscribe"]');
  }
  get successtext() {
    return $('//div[@id="success-subscribe"]');
  }
  get cartbut() {
    return $('//a[contains(text()," Cart")]');
  }

  async subscribed(email: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.subscriptionText.scrollIntoView();
    await browser.pause(1000);
    await this.inputEmailField.setValue(email);
    await browser.pause(1000);
    await this.subscribebut.click();
    await browser.pause(1000);
    await this.successtext.getText();
    await browser.pause(1000);
  }
  async cartSubscription(email: string) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.cartbut.click();
    await browser.pause(1000);
    await this.subscriptionText.scrollIntoView();
    await browser.pause(1000);
    await this.inputEmailField.setValue(email);
    await browser.pause(1000);
    await this.subscribebut.click();
    await browser.pause(1000);
    await this.successtext.getText();
    await browser.pause(1000);
  }
}
export default new subscriptionTest();
