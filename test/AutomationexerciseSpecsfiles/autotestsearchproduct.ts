import searchProducttest from "../automationexcersicePageObject/searchproduct.ts";

describe("Autotest search product field", async () => {
  it("Search Product", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await searchProducttest.consentbut.click();
    await browser.pause(1000);
    await searchProducttest.searchProduct("Rs. 500");
    await browser.pause(1000);
  });
});
