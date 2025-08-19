import registerWhileChecout from "../automationexcersice/regwhilecheckingout.ts";

describe("PlaceOrder", async () => {
  it(" Place Order: Register while Checkout", async () => {
    browser.url("https://automationexercise.com");
    browser.pause(1000);
    await registerWhileChecout.consentbut.click();
    await browser.pause(1000);
    await registerWhileChecout.registerwhilecheckout(
      "sam",
      "ogaga89317@gmail.com",
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
