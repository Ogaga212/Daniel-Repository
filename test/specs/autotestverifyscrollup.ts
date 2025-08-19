import verifyscrollup from "../automationexcersice/verifyscrollup.ts";

describe("Scroll Up Button", async () => {
  it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async () => {
    browser.url("https://automationexercise.com");
    await verifyscrollup.consentbut.click();
    await verifyscrollup.scrollupArrow();
  });
  it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async () => {
    browser.url("https://automationexercise.com");
    await verifyscrollup.scrollupwithoutArrow();
  });
});
