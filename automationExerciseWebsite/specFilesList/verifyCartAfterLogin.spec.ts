import headers from "../automationexercisepageobject/headers.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import loginPage from "../automationexercisepageobject/login.ts";

describe("Search Product", async () => {
  it("verify cart after login", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await headers.goToProductsPage();
    await productPage.verifyOnProductsPage();
    await productPage.searchProduct("Blue Top");
    await productPage.viewSearchedProductsText();
    await productPage.verifySearchedProduct("Blue Top");
    await productPage.addProductToCart("1");
    await productPage.continueShopping();
    await headers.goToCartPage();
    await cartPage.verifyOnCartPage();
    await headers.goToSignupLoginPage();
    await loginPage.fillInLoginDetails("nike123@gmail.com", "11running");
    await loginPage.clickLoginButton();
    await headers.goToCartPage();
    await cartPage.verifyProductInCart("Blue Top");
  });
});
