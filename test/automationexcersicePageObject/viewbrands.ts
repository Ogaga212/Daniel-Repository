class viewbrand {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get productbut() {
    return $('//a[ contains(@href,"/products")]');
  }
  get brandtext() {
    return $('//h2[text()="Brands"]');
  }
  get poloBrand() {
    return $('//a[@href="/brand_products/Polo"]');
  }
  get brandproductext() {
    return $('//h2[text()="Brand - Polo Products"]');
  }
  get madameprdoduct() {
    return $('//a[@href="/brand_products/Madame"]');
  }

  async viewcartandbrand() {
    await this.homePageImage.isDisplayed();
    await this.productbut.click();
    await this.brandtext.isDisplayed();
    await this.poloBrand.click();
    await expect(browser).toHaveTitle("Automation Exercise - Polo Products");
    await this.brandproductext.isDisplayed();
    await this.madameprdoduct.click();
  }
}
export default new viewbrand();
