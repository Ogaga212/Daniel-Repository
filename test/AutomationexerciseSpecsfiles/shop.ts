import shop9 from "../pageobjects/shop9ja";

describe("shop9ja signup", () => {
  it("user should see the cart icon", async () => {
    browser.url("https://www.shop9ja.co.uk/");
    await browser.pause(3000);
    await shop9.signup.click();
    await browser.pause(3000);
  });
});
