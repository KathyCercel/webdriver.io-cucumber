const BasePage = require('./base.page');

class HomePage {
  constructor() {
    this.basePage = new BasePage();
    this.showRowsDropDownButton = 'div[class*="sc-aef7b723-0 sc-dae82938-0 coScOT"]';
    this.cryptocurrencyNames = 'div[class*="sc-121f5308-1 hjdHIg"]';
  }

  get showRowsDropDown() {
    return $(
        this.showRowsDropDownButton,
    );
  }
  get tableRows() {
    return $$('table > tbody > tr');
  }
  async selectShowRow(value) {
    if (value === '20' || value === '50' || value === '100') {
      await this.showRowsDropDown.click();
      await browser.$(`//*[text()=${value}]`).click();
    } else {
      throw new Error('Invalid value, Please select from [20,50,100]');
    }
  }

  async rowCount(value) {
    if (value === '20' || value === '50' || value === '100') {
      const count = await this.tableRows.length;
      await browser.pause(600);
      expect(count).toHaveText(value);
    } else {
      throw new Error('Invalid value, Please select from [20,50,100]');
    }
  }

  async open() {
    await this.basePage.open('https://coinmarketcap.com/');
  }

  async assertPageElementIsDisplayed(selector) {
    try {
      const elem = await $(selector);
      await elem.waitForDisplayed({timeout: 3000});
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new HomePage();
