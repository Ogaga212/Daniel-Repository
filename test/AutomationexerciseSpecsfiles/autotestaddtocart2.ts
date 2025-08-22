import addTocartTest2 from "../automationexcersicePageObject/addtocart2.ts";

describe("Auto test add product to cart", async () => {
  it("Add products in cart", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await addTocartTest2.consentbut.click();
    await browser.pause(1000);
    await addTocartTest2.addtocart();
  });

  it("Verify Product quantity in Cart", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await addTocartTest2.quantityInCart("4");
  });
});
/*
I set the product quantity for each product as a variable in the page object so the test can check the exact number of items in the cart. The test works when a quantity is given, but fails if no quantity is set. (See lines 148–155.)
*/
