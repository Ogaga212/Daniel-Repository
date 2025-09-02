class addareview {
  
  
  get productbut() {
    return $('//a[ contains(@href,"/products")]');
  }
  get veiwProduct1stItem() {
    return $("//a[@href='/product_details/1' and contains(., 'View Product')]");
  }
  get writereviewtext() {
    return $('//a[text()="Write Your Review"]');
  }
  get namefield() {
    return $('//input[@id="name"]');
  }
  get emailfield() {
    return $('//input[@id="email"]');
  }
  get textareafield() {
    return $('//textarea[@name="review"]');
  }
  get submitreviewbut() {
    return $('//button[@id="button-review"]');
  }

  async addreviewtoProduct(name: string, email: string, reviewtext: string) {
    await this.productbut.click();
    await expect(browser).toHaveTitle("Automation Exercise - All Products");
    await this.veiwProduct1stItem.click();
    await this.writereviewtext.isDisplayed();
    await this.namefield.setValue(name);
    await this.emailfield.setValue(email);
    await this.textareafield.setValue(reviewtext);
    await this.submitreviewbut.click();
  }
}
export default new addareview();
