import addtorecommended from "../automationexcersicePageObject/addtocartrecommended.ts";

describe("Brand Products", async () => {
  it("View and cart brand Products", async () => {
    browser.url("https://automationexercise.com");
    await addtorecommended.consentbut.click();
    await addtorecommended.addtocartrecommendedproduct();
  });
});
