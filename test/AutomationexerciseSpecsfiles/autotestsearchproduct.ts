import searchProducttest from "../automationexcersicePageObject/searchproduct.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Autotest search product field", async () => {
  it("Search Product", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await $(searchProducttest.productButton).click();
    await $(searchProducttest.allProductText).isDisplayed();
    await searchProducttest.searchProduct("Blue Top");
    await $(searchProducttest.productRelatedToSearch).isDisplayed();
  });
});
