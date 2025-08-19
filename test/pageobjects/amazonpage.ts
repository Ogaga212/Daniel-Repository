class Amapage {
  get emailsearch() {
    return $(
      "#ap_email.a-input-text.a-span12.auth-autofocus.auth-required-field.auth-require-claim-validation"
    );
  }
  get continue() {
    return $(".a-button-input");
  }

  get password() {
    return $(
      "#ap_password.a-input-text.a-span12.auth-autofocus.auth-required-field"
    );
  }

  get Signin() {
    return $("#signInSubmit.a-button-input");
  }

  get cartIcon() {
    return $("#nav-cart-icon nav-sprite");
  }
}

export default new Amapage();
