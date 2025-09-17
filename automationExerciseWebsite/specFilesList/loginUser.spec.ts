import loginPage from "../automationexercisepageobject/login.ts";
import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Login to Autotest website", async () => {
  it("Login User with correct email and password", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToSignupLoginPage();
    await loginPage.LoginToAccountText();
    await loginPage.fillInLoginDetails(
      "testuserbe357839er@gmail.com",
      "11running"
    );
    await loginPage.clickLoginButton();
    await headers.verifyUserLoggedIn("mike");
    await headers.deleteAccount();
    await headers.verifyAccountDeleted();
  });

  it("Login User with incorrect email and password", async () => {
    await headers.goToSignupLoginPage();
    await loginPage.LoginToAccountText();
    await loginPage.fillInLoginDetails("testyueowp@gmail.com", "1234567");
    await loginPage.clickLoginButton();
    await loginPage.verifyErrorText();
  });
});
