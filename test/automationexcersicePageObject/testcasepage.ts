class testCasepage {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get testCaseBut() {
    return $("//a[contains(text(),'Test Cases')]");
  }
  get testCaseWord() {
    return $('//b[contains(text(),"Test Cases")]');
  }

  async testCase() {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.testCaseBut.click();
    await browser.pause(1000);
    await this.testCaseWord.isDisplayed();
    await browser.pause(1000);
  }
}
export default new testCasepage();
