import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import productDetails from "../automationexercisepageobject/productDetails.ts";

describe("Auto test add product to cart", async () => {
  it("Verify Product quantity in Cart", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await productPage.viewProduct("1");
    await productDetails.verifyOnProductDetailsPage();
    await productDetails.changeQuantity("4");
    await productPage.clickAddToCart();
    await productPage.viewCart();
    await cartPage.verifyProductInCart("Blue Top");
    await cartPage.quantityOfProducInCart("4", "1");
  });
});
