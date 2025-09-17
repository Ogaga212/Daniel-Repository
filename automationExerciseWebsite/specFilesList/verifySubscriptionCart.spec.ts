import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Autotest subscription", async () => {
  it("Verify subscription in cart page", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToCartPage();
    await homePage.scrollToFooter();
    await homePage.verifySubscriptionText();
    await homePage.fillInEmail("mike212@gmail.com");
    await homePage.clickSubscribeButton();
    await homePage.verifySubscribedText();
  });
});
