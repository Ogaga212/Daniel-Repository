class testCasepage {
  testCaseBut: string;
  testCaseWord: string;

  constructor() {
    this.testCaseBut = "//a[text()=' Test Cases']";
    this.testCaseWord = '//b[contains(text(),"Test Cases")]';
  }
}
export default new testCasepage();
