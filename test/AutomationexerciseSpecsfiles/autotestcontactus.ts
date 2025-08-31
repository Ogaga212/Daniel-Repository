import ContactUsTest from "../automationexcersicePageObject/contactus.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Contact us Journey", async () => {
  it("User should be able to send a contact us message", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await $(ContactUsTest.contactUsBut).click();
    await $(ContactUsTest.getInTouchText).isDisplayed();
    await ContactUsTest.contactUsDetails(
      "dan",
      "dan123@gmail.com",
      "Test",
      "Auto test contact us"
    );
    await $(ContactUsTest.chooseFile).setValue(
      "/Users/danieledema/Downloads/IMG_7157.jpeg"
    );
    await $(ContactUsTest.submitBut).click();
    await browser.acceptAlert();
    await $(ContactUsTest.successMsg).isDisplayed();
    await $(ContactUsTest.homeBut).click();
  });
});
