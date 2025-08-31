import regBeforecheckout from "../automationexcersicePageObject/regbeforecheckout.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";
import addTocartTest2 from "../automationexcersicePageObject/addtocart2.ts";

describe("PlaceOrder", async () => {
  it(" Place Order: login before Checkout", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await addTocartTest2.firstProductbut.click();
    await regBeforecheckout.continueshopbut.click();
    await regBeforecheckout.cartbut.click();
    await expect(browser).toHaveTitle("Automation Exercise - Checkout");
    await regBeforecheckout.proceedtocheckoutbut.click();
    await regBeforecheckout.registerLoginButton.click();
    await LoginAutotest.login("nike123@gmail.com", "11running");
    await LoginAutotest.userLoggedIn("dan");
    await regBeforecheckout.cartbut.click();
    await regBeforecheckout.proceedtocheckoutbut.click();
    await regBeforecheckout.verifyaddressdetails();
    await regBeforecheckout.enterPaymentInfo(
      "Buy order",
      "Daniel",
      "43567190278342",
      "341",
      "07",
      "2029"
    );
    await regBeforecheckout.confirmOrderbutton.click();
    await regBeforecheckout.orderhasBeenPlacedmsg.isDisplayed();
    await LoginAutotest.deleteAccount();
    await $(LoginAutotest.accountDeletedText).isDisplayed();
    await $(LoginAutotest.continueAfterDeleteBtn).click();
  });

  it.skip("verify billing address", async () => {
    browser.url("https://automationexercise.com");
  });
});
