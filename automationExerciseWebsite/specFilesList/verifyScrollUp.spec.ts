import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Verify scroll up", async () => {
  it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await browser.pause(1000);
    await homePage.scrollToFooter();
    await browser.pause(1000);
    await homePage.verifySubscriptionText();
    await browser.pause(1000);
    await homePage.clickScrollupButton();
    await browser.pause(1000);
    await homePage.viewFullfledgedmsg();
  });
  it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async () => {
    await homePage.scrollToFooter();
    await homePage.verifySubscriptionText();
    await browser.pause(1000);
    await homePage.scrollToFullfledgedmsg();
    await browser.pause(1000);
    await homePage.viewFullfledgedmsg();
  });
});
