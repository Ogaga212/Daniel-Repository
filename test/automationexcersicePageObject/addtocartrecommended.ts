class addtorecommended {
  get consentbut() {
    return $("//p[text()='Consent']");
  }
  get recommendeditem() {
    return $('//h2[text()="recommended items"]');
  }
  get firstproductaddtocartbut() {
    return $('//a[@data-product-id="1"]');
  }
  get ViewCartBut() {
    return $('//u[text()="View Cart"]');
  }
  get prodincart() {
    return $('//a[text()="Blue Top"]');
  }

  async addtocartrecommendedproduct() {
    await this.recommendeditem.scrollIntoView();
    await this.firstproductaddtocartbut.click();
    await this.ViewCartBut.click();
    await this.prodincart.isDisplayed();
  }
}
export default new addtorecommended();
