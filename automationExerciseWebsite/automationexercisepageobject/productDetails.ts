class productDetailsPage {
  newQuantity: string;
  namefield: string;
  emailfield: string;
  textareafield: string;
  writereviewtext: string;
  submitreviewbut: string;
  successText: string;

  constructor() {
    this.newQuantity = '//input[@id="quantity"]';
    this.namefield = '//input[@id="name"]';
    this.emailfield = '//input[@id="email"]';
    this.textareafield = '//textarea[@name="review"]';
    this.writereviewtext = '//a[text()="Write Your Review"]';
    this.submitreviewbut = '//button[@id="button-review"]';
    this.successText = "//span[text()='Thank you for your review.']";
  }
  async changeQuantity(quantity: string) {
    await $(this.newQuantity).setValue(quantity);
  }
  async verifyOnProductDetailsPage() {
    await expect(browser).toHaveTitle("Automation Exercise - Product Details");
  }
  async verifyDetailsOfProduct(
    name: string,
    category: string,
    price: string,
    availability: string,
    condition: string,
    brand: string
  ) {
    const productName = $(`//h2[normalize-space()="${name}"]`);
    await expect(productName).toBeDisplayed();
    const categoryofproduct = $(`//p[normalize-space()="${category}"]`);
    await expect(categoryofproduct).toBeDisplayed();
    const productprice = $(`//span[normalize-space()="${price}"]`);
    await expect(productprice).toBeDisplayed();
    const productAvailability = $(`//p[text()='${availability}']`);
    expect(await productAvailability.getText());
    const productCondition = $(`//p[text()='${condition}']`);
    expect(await productCondition.getText());
    const productBrand = $(`//p[text()='${brand}']`);
    expect(await productBrand.getText());
  }

  async fillReviewDetails(name: string, email: string, reviewtext: string) {
    await $(this.namefield).setValue(name);
    await $(this.emailfield).setValue(email);
    await $(this.textareafield).setValue(reviewtext);
  }

  async verifyWriteReviewText() {
    await expect($(this.writereviewtext)).toBeDisplayed();
  }

  async submitReview() {
    await $(this.submitreviewbut).click();
  }

  async verifySuccessText() {
    expect($(this.successText)).toBeDisplayed();
  }
}
export default new productDetailsPage();
