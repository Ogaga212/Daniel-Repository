import AddtocartAutotest from "../automationexcersicePageObject/addtocart.ts";

describe("Add to cart journey", async () => {
  it("User should be able to add an item to cart", async () => {
    browser.url("https://automationexercise.com/login");
    await browser.pause(1000);
    await AddtocartAutotest.Addtocart("nike123@gmail.com", "11running");
    await browser.pause(1000);
  });
});
