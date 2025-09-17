import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import cartPage from "../automationexercisepageobject/cart.ts";
import signupPage from "../automationexercisepageobject/signup.ts";
import paymentPage from "../automationexercisepageobject/payment.ts";

describe("Download Invoice", async () => {
  it("Download Invoice After Purchase", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    headers.goToSignupLoginPage();
    await signupPage.verifyNewSignupUserText();
    await signupPage.fillInSignUpDetails(
      "sam",
      "testuserbeetrytrertwgatar@gmail.com"
    );
    await signupPage.clickSignUpButton();
    await signupPage.registerNewUser(
      "11running",
      "1",
      "January",
      "2007",
      "sam",
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
    await headers.verifyUserLoggedIn("sam");
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
    await paymentPage.downloadInvoice();
    await paymentPage.continueToHome();
    await headers.deleteAccount();
    await headers.verifyAccountDeleted();
  });
});
