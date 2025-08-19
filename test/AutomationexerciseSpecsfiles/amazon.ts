import Amapage from "../pageobjects/amazonpage.ts";
//import { expect } from "expect-webdriverio";

describe("Amazon login page", () => {
  /*it("user should be able to login", async () => {
    browser.url(
      "https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Famazon-co-uk%2Fs%3Fk%3Damazon.co.uk%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
    );
    await Amapage.emailsearch.setValue("nexhopcraft@gmail.com");
    await browser.pause(3000);
    await Amapage.continue.click();
    await browser.pause(3000);
    await Amapage.password.setValue("11@BlessinG");
    await browser.pause(3000);
    await Amapage.Signin.click();
    await browser.pause(3000);
  });
  */
  it("user should see the cart icon", async () => {
    browser.url("https://www.amazon.com/ref=ap_frn_logo");
    await browser.pause(3000);
    await Amapage.cartIcon.isDisplayed();
    await browser.pause(3000);
  });
});
