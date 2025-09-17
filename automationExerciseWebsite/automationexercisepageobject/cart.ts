class cartPage {
  proceedtocheckoutbut: string;
  registerLoginButton: string;
  billingAddressText: string;
  yourdelvadressInfo: string;
  commentField: string;
  placeOrderButton: string;
  removeProduct: string;
  cartIsEmptyText: string;

  constructor() {
    this.proceedtocheckoutbut = "//a[text()='Proceed To Checkout']";
    this.registerLoginButton = '//u[contains(.,"Register / Login")]';
    this.billingAddressText = '//h3[contains(.,"Your billing address")]';
    this.yourdelvadressInfo = '//h3[contains(.,"Your delivery address")]';
    this.commentField = '//textarea[@class="form-control"]';
    this.placeOrderButton = '//a[@href="/payment"]';
    this.removeProduct = "//a[@class='cart_quantity_delete']";
    this.cartIsEmptyText = "//b[text()='Cart is empty!']";
  }
  async proceedToCheckout() {
    await $(this.proceedtocheckoutbut).click();
  }
  async clickRegisterLoginButton() {
    await $(this.registerLoginButton).click();
  }
  async verifyProductInCart(name: string) {
    const firstProductInCart = `//a[normalize-space()='${name}']`;
    expect($(firstProductInCart)).toBeDisplayed();
  }

  async quantityOfProducInCart(number: string, itemnumber: string) {
    const quantityforproduct1 = `//tr[@id='product-${itemnumber}']//button[@class='disabled'][normalize-space()='${number}']`;
    expect($(quantityforproduct1)).toBeDisplayed();
  }
  async priceOfProductInCart(price: string) {
    const priceOfproduct1 = `//p[text()='${price}']`;
    await $(priceOfproduct1).getText();
    expect($(priceOfproduct1)).toBeDisplayed();
  }
  async totalOfProductInCart(total: string) {
    const totalOfProduct1 = `//p[@class='cart_total_price'][normalize-space()='${total}']`;
    expect($(totalOfProduct1)).toBeDisplayed();
  }
  async verifyOnCartPage() {
    await expect(browser).toHaveTitle("Automation Exercise - Checkout");
  }
  async verifybillingAddress(
    name: string,
    company: string,
    addressline1: string,
    addressline2: string,
    stateandpostcode: string,
    country: string,
    mobile: string
  ) {
    await expect($(this.billingAddressText)).toBeDisplayed();
    const billingAddressFirstName = await $(
      `//ul[@id='address_invoice']//li[@class='address_firstname address_lastname'][normalize-space()="${name}"]`
    ).getText();
    expect(billingAddressFirstName).toContain(name);
    const billingAddressCompany = await $(
      `//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][normalize-space()="${company}"]`
    ).getText();
    expect(billingAddressCompany).toContain(company);
    const billingAddressLine1 = await $(
      `//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][normalize-space()="${addressline1}"]`
    ).getText();
    expect(billingAddressLine1).toContain(addressline1);
    const billingAddressLine2 = await $(
      `//ul[@id='address_invoice']//li[@class='address_address1 address_address2'][normalize-space()="${addressline2}"]`
    ).getText();
    expect(billingAddressLine2).toContain(addressline2);
    const billingAddressStatePostCode = await $(
      `//ul[@id='address_invoice']//li[@class='address_city address_state_name address_postcode'][normalize-space()="${stateandpostcode}"]`
    ).getText();
    expect(billingAddressStatePostCode).toContain(stateandpostcode);
    const billingAddressCountry = await $(
      `//ul[@id='address_invoice']//li[@class='address_country_name'][normalize-space()="${country}"]`
    ).getText();
    expect(billingAddressCountry).toContain(country);
    const billingAddressMobileNumber = await $(
      `//ul[@id='address_invoice']//li[@class='address_phone'][normalize-space()="${mobile}"]`
    ).getText();
    expect(billingAddressMobileNumber).toContain(mobile);
  }
  async verifyDeliveryAddressDetails(
    name: string,
    company: string,
    addressline1: string,
    addressline2: string,
    stateandpostcode: string,
    country: string,
    mobile: string
  ) {
    await expect($(this.yourdelvadressInfo)).toBeDisplayed();
    const deliveryAddressFirstName = await $(
      `//ul[@id='address_delivery']//li[@class='address_firstname address_lastname'][normalize-space()="${name}"]`
    ).getText();
    expect(deliveryAddressFirstName).toContain(name);
    const deliveryAddressCompany = await $(
      `//ul[@id="address_delivery"]//li[@class='address_address1 address_address2'][normalize-space()="${company}"]`
    ).getText();
    expect(deliveryAddressCompany).toContain(company);
    const deliveryAddressLine1 = await $(
      `//ul[@id="address_delivery"]//li[@class='address_address1 address_address2'][normalize-space()="${addressline1}"]`
    ).getText();
    expect(deliveryAddressLine1).toContain(addressline1);
    const deliveryAddressLine2 = await $(
      `//ul[@id="address_delivery"]//li[@class='address_address1 address_address2'][normalize-space()="${addressline2}"]`
    ).getText();
    expect(deliveryAddressLine2).toContain(addressline2);
    const deliveryAddressStatePostCode = await $(
      `//ul[@id="address_delivery"]//li[@class='address_city address_state_name address_postcode'][normalize-space()="${stateandpostcode}"]`
    ).getText();
    expect(deliveryAddressStatePostCode).toContain(stateandpostcode);
    const deliveryAddressCountry = await $(
      `//ul[@id="address_delivery"]//li[@class='address_country_name'][normalize-space()="${country}"]`
    ).getText();
    expect(deliveryAddressCountry).toContain(country);
    const deliveryAddressMobileNumber = await $(
      `//ul[@id="address_delivery"]//li[@class='address_phone'][normalize-space()="${mobile}"]`
    ).getText();
    expect(deliveryAddressMobileNumber).toContain(mobile);
  }

  async enterComment(message: string) {
    await $(this.commentField).setValue(message);
  }
  async placeOrder() {
    await $(this.placeOrderButton).click();
  }
  async removeProductFromCart() {
    await $(this.removeProduct).click();
  }
  async verifyCartIsEmpty() {
    await expect($(this.cartIsEmptyText)).toBeDisplayed();
  }
}
export default new cartPage();
