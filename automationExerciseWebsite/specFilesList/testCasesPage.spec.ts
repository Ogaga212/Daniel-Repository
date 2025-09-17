import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Test case page", async () => {
  it("Verify test case Page", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToTestCasesPage();
    await headers.verifytestCasesPage();
  });
});
