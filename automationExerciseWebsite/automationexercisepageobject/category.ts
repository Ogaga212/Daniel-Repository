class categoryPage {
  categoryText: string;
  brandtext: string;

  constructor() {
    this.categoryText = '//h2[contains(.,"Category")]';
    this.brandtext = '//h2[text()="Brands"]';
  }

  async verifyCategories() {
    await expect($(this.categoryText)).toBeDisplayed();
  }

  async clickCategoryType(gender1: string) {
    const categoryType = $(`//a[@href="${gender1}"]`);
    await categoryType.click();
  }

  async clickCategoryLink(linkText: string) {
    const categoryLink = $(`//a[text()='${linkText}']`);
    await categoryLink.click();
  }

  async verifyCategoryPage(category: string) {
    await expect(browser).toHaveTitle(`Automation Exercise - ${category}`);
  }

  async verifyCategoryOfProducts(text: string) {
    const categoryOfProductText = $(`//h2[text()="${text}"]`);
    await expect(categoryOfProductText).toBeDisplayed();
  }

  async verifyBrands() {
    await expect($(this.brandtext)).toBeDisplayed();
  }

  async selectBrand(brandType: string) {
    const brandName = $(`//a[@href="/brand_products/${brandType}"]`);
    await brandName.click();
  }

  async verifyBrandPage(brandPage: string) {
    await expect(browser).toHaveTitle(`Automation Exercise - ${brandPage}`);
  }

  async viewBrandProducts(brandType1: string) {
    const brandOfProductText = $(
      `//h2[text()="Brand - ${brandType1} Products"]`
    );
    await expect(brandOfProductText).toBeDisplayed();
  }
}
export default new categoryPage();
