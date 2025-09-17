import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import productPage from "../automationexercisepageobject/product.ts";

describe("Remove item from Cart", async () => {
  it("Remove from cart", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await productPage.addProductToCart("1");
    await productPage.continueShopping();
    await headers.goToCartPage();
    await cartPage.verifyOnCartPage();
    await cartPage.removeProductFromCart();
    await cartPage.verifyCartIsEmpty();
  });
});
