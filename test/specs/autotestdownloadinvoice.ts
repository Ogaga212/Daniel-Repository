import downloadInvoice from "../automationexcersice/downloadinvoice.ts";

describe("PlaceOrder", async () => {
  it(" Place Order: Register while Checkout", async () => {
    browser.url("https://automationexercise.com");
    await downloadInvoice.consentbut.click();
    await downloadInvoice.downloadInvoice(
      "sam",
      "ogagia00117@gmail.com",
      "123456aB",
      "1",
      "January",
      "2007",
      "sam",
      "James",
      "apple",
      "apartment 709",
      "Craven street",
      "India",
      "texas",
      "dallas",
      "12345",
      "07896527812",
      "ACCOUNT CREATED!",
      "Buy order",
      "Daniel",
      "43567190278342",
      "341",
      "07",
      "2029"
    );
  });
});
