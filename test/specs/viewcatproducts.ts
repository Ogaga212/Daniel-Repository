import viewcategoryProducttest from "../automationexcersice/viewcatproduct.ts";

describe("View Category Product", async () => {
  it("View Category Product", async () => {
    browser.url("https://automationexercise.com");
    await viewcategoryProducttest.consentbut.click();
    await viewcategoryProducttest.viewCategoryProduct();
  });
});
