import regBeforecheckout from "../automationexcersicePageObject/regbeforecheckout.ts";

describe("PlaceOrder", async () => {
  it(" Place Order: Register before Checkout", async () => {
    browser.url("https://automationexercise.com");
    await regBeforecheckout.consentbut.click();
    await regBeforecheckout.regbeforechecout(
      "sam",
      "testuser823shjye@gmail.com",
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
  it("verify billing address", async () => {
    browser.url("https://automationexercise.com");
    await regBeforecheckout.verifyaddressdetailsincheckout(
      "sam",
      "ogaga82317011111@gmail.com",
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
