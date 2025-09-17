import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import loginPage from "../automationexercisepageobject/login.ts";
import paymentPage from "../automationexercisepageobject/payment.ts";

describe("PlaceOrder", async () => {
  it(" Place Order: login before Checkout", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    headers.goToSignupLoginPage();
    await loginPage.LoginToAccountText();
    await loginPage.fillInLoginDetails("nike123@gmail.com", "11running");
    await loginPage.clickLoginButton();
    await headers.verifyUserLoggedIn("mike");
    await productPage.addProductToCart("1");
    await productPage.continueShopping();
    await headers.goToCartPage();
    await cartPage.verifyOnCartPage();
    await cartPage.proceedToCheckout();
    await cartPage.verifyDeliveryAddressDetails(
      "Mr. sam James",
      "apple",
      "apartment 709",
      "Craven street",
      "dallas texas 12345",
      "India",
      "07896527812"
    );
    await cartPage.verifybillingAddress(
      "Mr. sam James",
      "apple",
      "apartment 709",
      "Craven street",
      "dallas texas 12345",
      "India",
      "07896527812"
    );
    await cartPage.enterComment("delivered in 1 day");
    await cartPage.placeOrder();
    await paymentPage.enterPaymentInfo(
      "Daniel",
      "43567190278342",
      "341",
      "07",
      "2029"
    );
    await paymentPage.confirmOrder();
    await paymentPage.verifyOrderPlaced();
    await headers.deleteAccount();
    await headers.verifyAccountDeleted();
  });
});
