import subscriptionTest from "../automationexcersice/subscription.ts";

describe("Autotest subscription", async () => {
  it("Verify subscription in home page", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await subscriptionTest.consentbut.click();
    await browser.pause(1000);
    await subscriptionTest.subscribed("dan@gmail.com");
  });

  it("", async () => {
    browser.url("https://automationexercise.com/login");
    await browser.pause(1000);
    await subscriptionTest.cartSubscription("dan@gmail.com");
  });
});
