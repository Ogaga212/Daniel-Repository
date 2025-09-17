import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import categoryPage from "../automationexercisepageobject/category.ts";

describe("Brand Products", async () => {
  it("View and cart brand Products", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await categoryPage.verifyBrands();
    await categoryPage.selectBrand("Polo");
    await categoryPage.verifyBrandPage("Polo Products");
    await categoryPage.viewBrandProducts("Polo");
    await categoryPage.selectBrand("H&M");
    await categoryPage.viewBrandProducts("H&M");
  });
});
