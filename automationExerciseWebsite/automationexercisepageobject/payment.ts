class paymentPage {
  nameOnCard: string;
  cardNumber: string;
  cardCvcNumber: string;
  cardExpMonth: string;
  cardExpYear: string;
  confirmOrderbutton: string;
  orderhasBeenPlacedmsg: string;
  downloadinvoicebut: string;
  continuetohomebut: string;

  constructor() {
    this.nameOnCard = '//input[@data-qa="name-on-card"]';
    this.cardNumber = '//input[@data-qa="card-number"]';
    this.cardCvcNumber = '//input[@data-qa="cvc"]';
    this.cardExpMonth = '//input[@data-qa="expiry-month"]';
    this.cardExpYear = '//input[@data-qa="expiry-year"]';
    this.confirmOrderbutton = "//button[text()='Pay and Confirm Order']";
    this.orderhasBeenPlacedmsg = "//b[text()='Order Placed!']";
    this.downloadinvoicebut = '//a[text()="Download Invoice"]';
    this.continuetohomebut = '//a[text()="Continue"]';
  }

  async enterPaymentInfo(
    cardname: string,
    cardnumber: string,
    cvc: string,
    mm: string,
    expyear: string
  ) {
    await $(this.nameOnCard).setValue(cardname);
    await $(this.cardNumber).setValue(cardnumber);
    await $(this.cardCvcNumber).setValue(cvc);
    await $(this.cardExpMonth).setValue(mm);
    await $(this.cardExpYear).setValue(expyear);
  }

  async confirmOrder() {
    await $(this.confirmOrderbutton).click();
  }

  async verifyOrderPlaced() {
    await expect($(this.orderhasBeenPlacedmsg)).toBeDisplayed();
  }

  async downloadInvoice() {
    await $(this.downloadinvoicebut).click();
  }

  async continueToHome() {
    await $(this.continuetohomebut).click();
  }
}

export default new paymentPage();
