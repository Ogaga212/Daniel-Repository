describe("Register before checkout", async () => {
  it.skip("Logged out user should see Register/login CTA when trying to checkout", async () => {
    browser.url("https://automationexercise.com");
    await $("//p[text()='Consent']").click();
    await $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    ).isDisplayed();
    await $('//a[@data-product-id="2" and contains(., "Add to cart")]').click();
    await $("//u[text()='View Cart']").click();
    await expect(browser).toHaveTitle("Automation Exercise - Checkout");
    await $('//a[contains(.,"Proceed To Checkout")]').click();
    let registerLogin = await $(
      "//u[contains(.,'Register / Login')]"
    ).isDisplayed();
    registerLogin = true;
    if (registerLogin) {
      console.log("User is a Logged out user and thus cannot checkout");
    } else {
      console.log("User is a logged in user and should be able to checkout");
    }
  });
  it("Signup with wrong credentials", async () => {
    browser.url("https://automationexercise.com");
    await $("//p[text()='Consent']").click();
    await $(
      "//div[@class='item active']//img[@alt='demo website for practice']"
    ).isDisplayed();
    await $("//a[normalize-space()='Signup / Login']").click();
    await $("//input[@placeholder='Name']").setValue("dan");
    await $("//input[@data-qa='signup-email']").setValue("nike123@gmail.com");
    await $("//button[normalize-space()='Signup']").click();
    const errormessage = await $(
      '//p[contains(text(),"Email Address already exist!")]'
    );
    expect(await errormessage.isDisplayed()).toEqual(true);

    if (errormessage) {
      console.log("User is already signed up");
    } else {
      console.log("User is not a registered user");
    }
  });
});
