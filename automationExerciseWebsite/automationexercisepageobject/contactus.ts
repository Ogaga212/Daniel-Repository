class ContactusPage {
  getInTouchText: string;
  nameField: string;
  emailField: string;
  subjectField: string;
  message: string;
  chooseFile: string;
  submitBut: string;
  successMsg: string;

  constructor() {
    this.getInTouchText = '//h2[contains (text(), "Get In Touch")]';
    this.nameField = '//input[@data-qa="name"]';
    this.emailField = '//input[@data-qa="email"]';
    this.subjectField = '//input[@data-qa="subject"]';
    this.message = '//textarea[@data-qa="message"]';
    this.chooseFile = '//input[@name="upload_file"]';
    this.submitBut = '//input[@data-qa="submit-button"]';
    this.successMsg = '//div[@class="status alert alert-success"]';
  }

  async verifyGetInTouchText() {
    await expect($(this.getInTouchText)).toBeDisplayed();
  }
  async fillIncontactDetails(
    name: string,
    email: string,
    subject: string,
    msg: string
  ) {
    await $(this.nameField).setValue(name);
    await $(this.emailField).setValue(email);
    await $(this.subjectField).setValue(subject);
    await $(this.message).setValue(msg);
  }
  async uploadFile(filepath: string) {
    await $(this.chooseFile).setValue(filepath);
  }
  async submitForm() {
    await $(this.submitBut).click();
    await browser.acceptAlert();
  }
  async verifySuccessMessage() {
    await expect($(this.successMsg)).toBeDisplayed();
  }
}
export default new ContactusPage();
