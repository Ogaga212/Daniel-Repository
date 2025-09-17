import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import categoryPage from "../automationexercisepageobject/category.ts";

describe("View Category Product", async () => {
  it("View Category Product", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await categoryPage.verifyCategories();
    await categoryPage.clickCategoryType("#Women");
    await categoryPage.clickCategoryLink("Dress ");
    await categoryPage.verifyCategoryPage("Dress Products");
    await categoryPage.verifyCategoryOfProducts("Women - Dress Products");
    await categoryPage.clickCategoryType("#Men");
    await categoryPage.clickCategoryLink("Tshirts ");
    await categoryPage.verifyCategoryOfProducts("Men - Tshirts Products");
  });
});
