import subscriptionTest from "../automationexcersicePageObject/subscription.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Autotest subscription", async () => {
  it("Verify subscription in home page", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await $(subscriptionTest.subscriptionText).scrollIntoView();
    await subscriptionTest.fillInSubscribeTextField("dan@gmail.com");
    await $(subscriptionTest.successText).getText();
    await $(subscriptionTest.successText).isDisplayed();
  });

  it("Verify Subscription in Cart page", async () => {
    await $(subscriptionTest.cartButton).click();
    await $(subscriptionTest.subscriptionText).scrollIntoView();
    await subscriptionTest.fillInSubscribeTextField("dan@gmail.com");
    await $(subscriptionTest.successText).getText();
    await $(subscriptionTest.successText).isDisplayed();
  });
});
