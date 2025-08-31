import signupAutotest from "../automationexcersicePageObject/signuppage.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Signup to Autotest website", () => {
  it("Register User with new email address", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await signupAutotest.signUpheader.click();
    await signupAutotest.signUp(
      "mike",
      "testuser128977@gmail.com",
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
      "07896527812",
      "ACCOUNT CREATED!"
    );
    await LoginAutotest.userLoggedIn("mike");
    await LoginAutotest.deleteAccount();
  });

  it("Register User with existing email", async () => {
    await signupAutotest.signUpheader.click();
    await signupAutotest.newusertext.isDisplayed();
    await signupAutotest.singnUpexistemail("nike123@gmail.com", "dan");
    await signupAutotest.signUpbut.click();
    await signupAutotest.errormsg.isDisplayed();
  });
});
