import headers from "../automationexercisepageobject/headers.ts";
import productPage from "../automationexercisepageobject/product.ts";
import homePage from "../automationexercisepageobject/home.ts";

describe("Autotest search product field", async () => {
  it("Search Product", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToProductsPage();
    await productPage.verifyOnProductsPage();
    await productPage.searchProduct("Blue Top");
    await productPage.viewSearchedProductsText();
    await productPage.verifySearchedProduct("Blue Top");
  });
});
