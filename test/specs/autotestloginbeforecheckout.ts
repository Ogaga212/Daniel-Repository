import loginbeforeCheckout from "../automationexcersice/loginbeforchecout.ts";

describe("Placeorder", async () => {
  it("Place Order: Login before Checkout", async () => {
    browser.url("https://automationexercise.com/login");
    await browser.pause(1000);
    await loginbeforeCheckout.consentbut.click();
    await browser.pause(1000);
    await loginbeforeCheckout.loginbefchecout(
      "nike123@gmail.com",
      "11running",
      "Buy order",
      "Daniel",
      "43567190278342",
      "341",
      "07",
      "2029"
    );
  });
});
