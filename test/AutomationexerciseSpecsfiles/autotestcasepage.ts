import testCasepage from "../automationexcersicePageObject/testcasepage.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";
describe("Test case page", async () => {
  it("Verify test case Page", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await $(testCasepage.testCaseBut).click();
    await $(testCasepage.testCaseWord).isDisplayed();
  });
});
