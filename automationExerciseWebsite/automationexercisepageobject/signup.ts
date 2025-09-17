class signupPage {
  titleMalebox: string;
  titleFemaleBox: string;
  signUpName: string;
  signUpEmail: string;
  signUpPasswordField: string;
  dayOfbirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  newsLetterTick: string;
  recieveSpecialTick: string;
  firstNameField: string;
  lastNameField: string;
  companyField: string;
  address1Field: string;
  address2Field: string;
  countryField: string;
  stateField: string;
  cityField: string;
  zipCodeField: string;
  mobileNumberField: string;
  createAccountbut: string;
  actConfirmationMessage: string;
  continuebut: string;
  enterAccountinfotext: string;
  signupErrorMsgText: string;
  newsignupuserText: string;

  constructor() {
    this.titleMalebox = "//input[@id='id_gender1']";
    this.titleFemaleBox = "//input[@id='id_gender2']";
    this.signUpName = "//input[@data-qa='signup-name']";
    this.signUpEmail = "//input[@data-qa='signup-email']";
    this.signUpPasswordField = "//input[@id='password']";
    this.dayOfbirth = "//select[@id='days']";
    this.monthOfBirth = "//select[@id='months']";
    this.yearOfBirth = "//select[@id='years']";
    this.newsLetterTick = "//input[@id='newsletter']";
    this.recieveSpecialTick = "//input[@id='optin']";
    this.firstNameField = "//input[@id='first_name']";
    this.lastNameField = "//input[@id='last_name']";
    this.companyField = "//input[@id='company']";
    this.address1Field = "//input[@id='address1']";
    this.address2Field = "//input[@id='address2']";
    this.countryField = "//select[@id='country']";
    this.stateField = "//input[@id='state']";
    this.cityField = "//input[@id='city']";
    this.zipCodeField = "//input[@id='zipcode']";
    this.mobileNumberField = "//input[@id='mobile_number']";
    this.createAccountbut = "//button[normalize-space()='Create Account']";
    this.actConfirmationMessage = "//b[normalize-space()='Account Created!']";
    this.enterAccountinfotext =
      "//b[normalize-space()='Enter Account Information']";
    this.continuebut = '//a[@data-qa="continue-button"]';

    this.signupErrorMsgText =
      '//p[contains(text(), "Email Address already exist!")]';
    this.newsignupuserText = "//h2[text()='New User Signup!']";
  }

  async verifyNewSignupUserText() {
    await expect($(this.newsignupuserText)).toBeDisplayed();
  }

  async fillInSignUpDetails(name: string, email: string) {
    await $(this.signUpName).setValue(name);
    await $(this.signUpEmail).setValue(email);
  }
  async clickSignUpButton() {
    const signUpButton = "//button[normalize-space()='Signup']";
    await $(signUpButton).click();
  }

  async registerNewUser(
    password: string,
    day: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    company: string,
    address1: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobileNumber: string
  ) {
    await expect($(this.enterAccountinfotext)).toBeDisplayed();
    await $(this.titleMalebox).click();
    await $(this.signUpPasswordField).setValue(password);
    await $(this.dayOfbirth).selectByVisibleText(day);
    await $(this.monthOfBirth).selectByVisibleText(month);
    await $(this.yearOfBirth).selectByVisibleText(year);
    await $(this.newsLetterTick).click();
    await $(this.recieveSpecialTick).click();
    await $(this.firstNameField).setValue(firstName);
    await $(this.lastNameField).setValue(lastName);
    await $(this.companyField).setValue(company);
    await $(this.address1Field).setValue(address1);
    await $(this.address2Field).setValue(address2);
    await $(this.countryField).selectByVisibleText(country);
    await $(this.stateField).setValue(state);
    await $(this.cityField).setValue(city);
    await $(this.zipCodeField).setValue(zipcode);
    await $(this.mobileNumberField).setValue(mobileNumber);
    await $(this.createAccountbut).click();
    await expect($(this.actConfirmationMessage)).toBeDisplayed();
    await $(this.continuebut).click();
  }
  async verifySignupErrorText() {
    await expect($(this.signupErrorMsgText)).toBeDisplayed();
  }
}
export default new signupPage();
