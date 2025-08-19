import ContatctUsTest from "../automationexcersicePageObject/contactus.ts";

describe("Contact us Journey", async () => {
  it("User should be able to send a contact us message", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await ContatctUsTest.consentbut.click();
    await browser.pause(1000);
    await ContatctUsTest.contactus(
      "dan",
      "dan123@gmail.com",
      "Test",
      "Auto test contact us",
      "/Users/user/Downloads/2.png"
    );
  });
});
