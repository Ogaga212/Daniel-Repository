import productDetailstest from "../automationexcersicePageObject/productDetailspage.ts";
import LoginAutotest from "../automationexcersicePageObject/loginpage.ts";

describe("Product View on Autotest", async () => {
  it("Verify All Products and Products Details Page", async () => {
    await LoginAutotest.checkHomePageIsVisible();
    await $(productDetailstest.productBut).click();
    await $(productDetailstest.allProductText).isDisplayed();
    await $(productDetailstest.productList).isDisplayed();
    await $(productDetailstest.veiw1stProductButton).click();
    await expect(browser).toHaveUrl(
      "https://automationexercise.com/product_details/1"
    );
    await productDetailstest.productDetails(
      "Blue Top",
      "Category: Women > Tops",
      "Rs. 500",
      " In Stock",
      " New",
      " Polo"
    );
  });
});
