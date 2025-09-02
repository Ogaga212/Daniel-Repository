class ContactUsTest {
  contactUsBut: string;
  getInTouchText: string;
  nameField: string;
  emailField: string;
  subjectField: string;
  message: string;
  chooseFile: string;
  submitBut: string;
  successMsg: string;
  homeBut: string;

  constructor() {
    this.contactUsBut = "//a[contains(@href, '/contact_us')]";
    this.getInTouchText = '//h2[contains (text(), "Get In Touch")]';
    this.nameField = '//input[@data-qa="name"]';
    this.emailField = '//input[@data-qa="email"]';
    this.subjectField = '//input[@data-qa="subject"]';
    this.message = '//textarea[@data-qa="message"]';
    this.chooseFile = '//input[@name="upload_file"]';
    this.submitBut = '//input[@data-qa="submit-button"]';
    this.successMsg = '//div[@class="status alert alert-success"]';
    this.homeBut = '//span[contains(text(),"Home")]';
  }
  async contactUsDetails(
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
}
export default new ContactUsTest();
