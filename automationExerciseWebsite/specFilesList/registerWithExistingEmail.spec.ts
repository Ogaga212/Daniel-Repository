import headers from "../automationexercisepageobject/headers.ts";
import signupPage from "../automationexercisepageobject/signup.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Signup to Autotest website", () => {
  it("Register User with existing email", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToSignupLoginPage();
    await signupPage.verifyNewSignupUserText();
    await signupPage.fillInSignUpDetails("dan", "nike123@gmail.com");
    await signupPage.clickSignUpButton();
    await signupPage.verifySignupErrorText();
  });
});
