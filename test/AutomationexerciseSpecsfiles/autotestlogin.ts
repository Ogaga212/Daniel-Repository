import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Login to Autotest website", async () => {
  it("Login User with correct email and password", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await LoginAutotest.login("testuser989rghb2zz0@gmail.com", "123456aB");
    await expect($(LoginAutotest.loginPageImage)).toBeDisplayed();
    await LoginAutotest.userLoggedIn("mike");
    await LoginAutotest.deleteAccount();
    await $(LoginAutotest.accountDeletedText).isDisplayed();
    await $(LoginAutotest.continueAfterDeleteBtn).click();
  });

  it("Login User with incorrect email and password", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await LoginAutotest.login("mail32900@gmail.com", "1234");
    await $(LoginAutotest.errorMsgText).isDisplayed();
  });

  it("Logout User", async () => {
    await LoginAutotest.login("nike123@gmail.com", "11running");
    await LoginAutotest.userLoggedIn("dan");
    await $(LoginAutotest.logoutBtn).click();
  });
});
