import LoginAutotest from "../automationexcersice/loginpage.ts";

describe("Login to Autotest website", async () => {
  it("Login User with correct email and password", async () => {
    browser.url("https://automationexercise.com/login");
    await LoginAutotest.consentbut.click();
    await LoginAutotest.Login("ogaga2311@gmail.com", "123456aB");
  });

  it.skip("Login User with incorrect email and password", async () => {
    browser.url("https://automationexercise.com/");
    await LoginAutotest.errorLogin("mail32900@gmail.com", "1234");
  });
});

describe("Logout from autotest website", async () => {
  it.skip("User should be able to logout with existing email and password", async () => {
    browser.url("https://automationexercise.com/");
    await LoginAutotest.logout("nike123@gmail.com", "11running");
  });
});
