import headers from "../automationexercisepageobject/headers.ts";
import productPage from "../automationexercisepageobject/product.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productDetailsPage from "../automationexercisepageobject/productDetails.ts";
describe("Product View on Autotest", async () => {
  it("Verify All Products and Products Details Page", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToProductsPage();
    await productPage.verifyOnProductsPage();
    await productPage.viewProduct("1");
    await productDetailsPage.verifyOnProductDetailsPage();
    await productDetailsPage.verifyDetailsOfProduct(
      "Blue Top",
      "Category: Women > Tops",
      "Rs. 500",
      " In Stock",
      " New",
      " Polo"
    );
  });
});
