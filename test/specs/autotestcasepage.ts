import testCasepage from "../automationexcersice/testcasepage.ts";

describe("Test case page", async () => {
  it("Verify test case Page", async () => {
    browser.url("https://automationexercise.com");
    await browser.pause(1000);
    await testCasepage.consentbut.click();
    await browser.pause(1000);
    await testCasepage.testCase();
  });
});
