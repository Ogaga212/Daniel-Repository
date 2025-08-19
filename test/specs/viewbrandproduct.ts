import viewbrand from "../automationexcersice/viewbrands.ts";

describe("Brand Products", async () => {
  it("View and cart brand Products", async () => {
    browser.url("https://automationexercise.com");
    await viewbrand.consentbut.click();
    await viewbrand.viewcartandbrand();
  });
});
