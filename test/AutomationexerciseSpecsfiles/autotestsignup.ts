import SignupAutotest from "../automationexcersicePageObject/signuppage.ts";

//const SignupAutotest = import("../automationexcersice/signuppage.ts");

describe("Signup to Autotest website", () => {
  it("Register User with new email address", async () => {
    browser.url("https://automationexercise.com");
    browser.pause(1000);
    await SignupAutotest.consentbut.click();

    await browser.pause(1000);
    await SignupAutotest.signUp(
      "mike",
      "testuser78333335@gmail.com",
      "123456aB",
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
      "07896527812",
      "ACCOUNT CREATED!"
    );
  });

  it("Register User with existing email", async () => {
    browser.url("https://automationexercise.com/login");
    await browser.pause(1000);
    await SignupAutotest.singnUpexistemail("nike123@gmail.com", "dan");
  });
});
