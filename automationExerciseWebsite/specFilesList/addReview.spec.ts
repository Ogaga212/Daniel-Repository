import headers from "../automationexercisepageobject/headers.ts";
import homePage from "../automationexercisepageobject/home.ts";
import productPage from "../automationexercisepageobject/product.ts";
import productDetailsPage from "../automationexercisepageobject/productDetails.ts";

describe("Auto test add review", async () => {
  it("Add review on product", async () => {
    await headers.openWebPage();
    await headers.acceptConsent();
    await homePage.checkHomePageIsVisible();
    await headers.goToProductsPage();
    await productPage.verifyOnProductsPage();
    await productPage.viewProduct("1");
    await productDetailsPage.verifyWriteReviewText();
    await browser.pause(3000);
    await productDetailsPage.fillReviewDetails(
      "mike",
      "testuser1562@gmail.com",
      "great website"
    );
    await productDetailsPage.submitReview();
    await productDetailsPage.verifySuccessText();
  });
});
