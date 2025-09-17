import headers from "../automationexercisepageobject/headers.ts";
import contactusPage from "../automationexercisepageobject/contactus.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Contact us Journey", async () => {
  it("User should be able to send a contact us message", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToSignupLoginPage();
    await headers.goToContactUsPage();
    await contactusPage.verifyGetInTouchText();
    await contactusPage.fillIncontactDetails(
      "mike",
      "testuser123@gmail.com",
      "wrong order",
      "i want to speak to someone about an order"
    );
    await contactusPage.uploadFile(
      "/Users/danieledema/Downloads/Sql Basics Intermediate.pdf"
    );
    await contactusPage.submitForm();
    await contactusPage.verifySuccessMessage();
    await headers.gotoHomePage();
    await homePage.checkHomePageIsVisible();
  });
});
