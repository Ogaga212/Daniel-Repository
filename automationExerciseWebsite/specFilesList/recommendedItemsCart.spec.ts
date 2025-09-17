import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";

describe("Brand Products", async () => {
  it("View and cart brand Products", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.scrollToFooter();
    await homePage.verifyRecommendItemText();
    await productPage.addProductToCart("1");
    await productPage.viewCart();
    await cartPage.verifyProductInCart("1");
  });
});
