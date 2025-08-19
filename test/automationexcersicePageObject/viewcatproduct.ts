class viewcategoryProducttest {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get homePageImage() {
    return $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    );
  }
  get categorytext() {
    return $('//h2[contains(.,"Category")]');
  }
  get womenCategory() {
    return $('//a[@href="#Women"]');
  }
  get womendressCategory() {
    return $('//a[@href="/category_products/1"]');
  }
  get womendressproducttext() {
    return $('//h2[contains(.,"Women - Dress Products")]');
  }
  get menCategory() {
    return $('//a[@href="#Men"]');
  }
  get mensTshirtcategory() {
    return $('//a[@href="/category_products/3"]');
  }

  async viewCategoryProduct() {
    await this.homePageImage.isDisplayed();
    await this.categorytext.isDisplayed();
    await this.womenCategory.click();
    await this.womendressCategory.click();
    await expect(browser).toHaveTitle("Automation Exercise - Dress Products");
    await this.womendressproducttext.isDisplayed();
    await this.menCategory.click();
    await this.mensTshirtcategory.click();
    await expect(browser).toHaveTitle("Automation Exercise - Tshirts Products");
  }
}
export default new viewcategoryProducttest();
