class ContatctUsTest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get contactusbut() {
    return $("//a[contains(@href, '/contact_us')]");
  }
  get getIntouchtext() {
    return $('//h2[contains (text(), "Get In Touch")]');
  }
  get namefield() {
    return $('//input[@data-qa="name"]');
  }
  get emailfield() {
    return $('//input[@data-qa="email"]');
  }
  get subjectfield() {
    return $('//input[@data-qa="subject"]');
  }
  get msg() {
    return $('//textarea[@data-qa="message"]');
  }
  get choosefile() {
    return $('//input[@name="upload_file"]');
  }
  get submitbut() {
    return $('//input[@data-qa="submit-button"]');
  }
  get successmsg() {
    return $('//div[@class="status alert alert-success"]');
  }
  get homebut() {
    return $('//span[contains(text(),"Home")]');
  }

  async contactus(
    name: string,
    email: string,
    subject: string,
    msg: string,
    filePath: string
  ) {
    await this.homePageImage.isDisplayed();
    await browser.pause(1000);
    await this.contactusbut.click();
    await browser.pause(1000);
    await this.getIntouchtext.isDisplayed();
    await browser.pause(1000);
    await this.namefield.setValue(name);
    await browser.pause(1000);
    await this.emailfield.setValue(email);
    await browser.pause(1000);
    await this.subjectfield.setValue(subject);
    await browser.pause(1000);
    await this.msg.setValue(msg);
    await browser.pause(1000);
    await this.choosefile.setValue(filePath);
    await browser.pause(1000);
    await this.submitbut.click();
    await browser.acceptAlert();
    await browser.pause(1000);
    await this.successmsg.isDisplayed();
    await browser.pause(1000);
    await this.homebut.click();
    await browser.pause(1000);
  }
}
export default new ContatctUsTest();
