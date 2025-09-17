import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";

describe("Auto test add product to cart", async () => {
  it("Add products in cart", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToProductsPage();
    await productPage.hoverOver1stProduct();
    await productPage.addProductToCart("1");
    await productPage.continueShopping();
    await productPage.hoverOver2ndProduct();
    await productPage.addProductToCart("2");
    await productPage.viewCart();
    await cartPage.verifyProductInCart("Blue Top");
    await cartPage.priceOfProductInCart("Rs. 500");
    await cartPage.quantityOfProducInCart("1", "1");
    await cartPage.totalOfProductInCart("Rs. 500");
    await cartPage.verifyProductInCart("Men Tshirt");
    await cartPage.priceOfProductInCart("Rs. 400");
    await cartPage.quantityOfProducInCart("1", "2");
    await cartPage.totalOfProductInCart("Rs. 400");
  });
});
