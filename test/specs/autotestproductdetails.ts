import productDetailstest from "../automationexcersice/productDetailspage.ts";

describe("Product View on Autotest", async () => {
  it("Verify All Products and Products Details Page", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await productDetailstest.consentbut.click();
    await browser.pause(1000);
    await productDetailstest.productDetails();
  });
});
