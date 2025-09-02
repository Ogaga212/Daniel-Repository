import addTocartTest2 from "../automationexcersicePageObject/addtocart2.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Auto test add product to cart", async () => {
  it.skip("Add products in cart", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await addTocartTest2.productbut.click();
    await addTocartTest2.firstProductbut.click();
    await addTocartTest2.continueshopbut.click();
    await addTocartTest2.secondProductbut.click();
    await addTocartTest2.viewcartbut.click();
    await addTocartTest2.addtocart();
  });

  it("Verify Product quantity in Cart", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await addTocartTest2.quantityInCart("6");

  });

    it.skip("View and cart brand Products", async () => {
      browser.url("https://automationexercise.com");
      await addTocartTest2.productbut.click();
      await expect(browser).toHaveTitle("Automation Exercise - All Products");
      await addTocartTest2.viewProduct1stitem.click();
      await addTocartTest2.writereviewtext.isDisplayed();
      await addTocartTest2.addreviewtoProduct(
        "daniel",
        "mike@gmail.com",
        "review message"
      );
      await addTocartTest2.submitreviewbut.click();
    });
});
/*
firstly i deleted the two initial items that were added to the cart from the first test case after it had verified all the test steps.
Then I set the product quantity as a variable in the page object so the test can check the exact number of items in the cart. The test works when a quantity is given, but fails if a lesser number or no quantity is set. (See lines 158–160. on the pageobject)
*/
