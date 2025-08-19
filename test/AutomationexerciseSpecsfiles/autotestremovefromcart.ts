import RemovefromcartTest from "../automationexcersicePageObject/removeproductfromcart.ts";

describe("Remove item from Cart", async () => {
  it("Remove from cart", async () => {
    browser.url("https://automationexercise.com");
    await RemovefromcartTest.consentbut.click();
    await RemovefromcartTest.removeFromcart();
  });
});
