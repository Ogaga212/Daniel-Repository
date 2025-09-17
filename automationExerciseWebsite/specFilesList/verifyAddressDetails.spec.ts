import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import signupPage from "../automationexercisepageobject/signup.ts";

describe("PlaceOrder", async () => {
  it.skip("verify billing address", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    headers.goToSignupLoginPage();
    await signupPage.verifyNewSignupUserText();
    await signupPage.fillInSignUpDetails(
      "peter",
      "testuserbeetriryytr225tar@gmail.com"
    );
    await signupPage.clickSignUpButton();
    await signupPage.registerNewUser(
      "11running",
      "1",
      "January",
      "2007",
      "peter",
      "James",
      "apple",
      "apartment 709",
      "Craven street",
      "India",
      "texas",
      "dallas",
      "12345",
      "07896527812"
    );
    await headers.verifyUserLoggedIn("peter");
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
    await headers.deleteAccount();
    await headers.verifyAccountDeleted();
  });
});
