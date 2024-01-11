import { StudentRegistrationPage } from '../../pages/studentRegistrationPage.mjs';

describe('Registration page inputs validation', () => {
  beforeEach(() => {
    const studentRegistrationPage = new StudentRegistrationPage();
    cy.viewport(1100, 1100);
    studentRegistrationPage.visit();
  });

  it('should register student with valid data', () => {
    cy.fixture('studentRegistrationForm.json').then((data) => {
      const studentRegistrationPage = new StudentRegistrationPage();
      const { validUser } = data;
      studentRegistrationPage.fillRegisterFields(validUser);
      studentRegistrationPage.femaleRadioBtn.click();
      studentRegistrationPage.submitBtn.click();
      studentRegistrationPage.successSubmitForm.should('exist');
      studentRegistrationPage.successSubmitFormTitle
        .should('be.visible')
        .and('have.text', 'Thanks for submitting the form');
    });
  });

  it('should not register student with invalid email format', () => {
    cy.fixture('studentRegistrationForm.json').then((data) => {
      const studentRegistrationPage = new StudentRegistrationPage();
      const { invalidEmail } = data;
      studentRegistrationPage.fillRegisterFields(invalidEmail);
      studentRegistrationPage.submitBtn.click();
      studentRegistrationPage.successSubmitForm.should('not.exist');
    });
  });

  it('should not register student without selecting gender', () => {
    cy.fixture('studentRegistrationForm.json').then((data) => {
      const studentRegistrationPage = new StudentRegistrationPage();
      const { validUser } = data;
      studentRegistrationPage.fillRegisterFields(validUser);
      studentRegistrationPage.submitBtn.click();
      studentRegistrationPage.successSubmitForm.should('not.exist');
    });
  });
});
