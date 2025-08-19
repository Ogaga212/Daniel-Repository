import addareview from "../automationexcersice/addreviewonproduct.ts";

describe("Brand Products", async () => {
  it("View and cart brand Products", async () => {
    browser.url("https://automationexercise.com");
    await addareview.consentbut.click();
    await addareview.addreviewtoProduct(
      "daniel",
      "mike@gmail.com",
      "review message"
    );
  });
});
