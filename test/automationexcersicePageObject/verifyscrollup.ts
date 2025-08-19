class verifyscrollup {
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
  get scrollupbut() {
    return $('//a[@id="scrollUp"]');
  }
  get fullfledgedmsg() {
    return $(
      '//h2[text()="Full-Fledged practice website for Automation Engineers"]'
    );
  }

  async scrollupArrow() {
    await this.homePageImage.isDisplayed();
    await this.subscriptionText.scrollIntoView();
    await this.scrollupbut.click();
    await this.fullfledgedmsg.isDisplayed();
  }
  async scrollupwithoutArrow() {
    await this.homePageImage.isDisplayed();
    await this.subscriptionText.scrollIntoView();
    await this.fullfledgedmsg.scrollIntoView();
  }
}
export default new verifyscrollup();
