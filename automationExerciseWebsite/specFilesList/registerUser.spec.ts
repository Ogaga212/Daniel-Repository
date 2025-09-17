import headers from "../automationexercisepageobject/headers.ts";
import signupPage from "../automationexercisepageobject/signup.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Signup to Autotest website", () => {
  it("Register User with new email address", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToSignupLoginPage();
    await signupPage.verifyNewSignupUserText();
    await signupPage.fillInSignUpDetails(
      "mike",
      "testuserbe3511139er@gmail.com"
    );
    await signupPage.clickSignUpButton();
    await signupPage.registerNewUser(
      "11running",
      "1",
      "January",
      "2007",
      "sam",
      "James",
      "apple",
      "apartment 709",
      "Craven street",
      "India",
      "texas",
      "dallas",
      "12345",
      "07896527812"
    );
    await headers.verifyUserLoggedIn("mike");
    //await LoginAutotest.deleteAccount();
  });
});
