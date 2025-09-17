import loginPage from "../automationexercisepageobject/login.ts";
import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Logout from Autotest website", async () => {
  it("Logout User", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToSignupLoginPage();
    await loginPage.LoginToAccountText();
    await loginPage.fillInLoginDetails("nike123@gmail.com", "11running");
    await loginPage.clickLoginButton();
    await headers.verifyUserLoggedIn("mike");
    await headers.logoutFromAccount();
    await loginPage.verifyloginPage();
  });
});
