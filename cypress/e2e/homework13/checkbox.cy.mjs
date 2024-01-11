import { CheckboxPage } from '../../pages/checkboxPage.mjs';

describe('Bonus tests', () => {
  it('should select Private checbox and verify text in result', () => {
    const checkboxPage = new CheckboxPage();
    checkboxPage.visit();
    checkboxPage.homeToggle.click();
    checkboxPage.documentsToggle.click();
    checkboxPage.officeToggle.click();
    checkboxPage.privateCheckbox.click();
    checkboxPage.resultForSelected.should('be.visible').and('have.text', 'You have selected :private');
  });
});
