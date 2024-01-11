import { BasePage } from './base.mjs';

export class StudentRegistrationPage extends BasePage {
  constructor() {
    super('/automation-practice-form');
  }

  get firstNameInput() {
    return cy.get('#firstName');
  }

  get lastNameInput() {
    return cy.get('#lastName');
  }

  get emailInput() {
    return cy.get('#userEmail');
  }

  get emailInput() {
    return cy.get('#userEmail');
  }

  get femaleRadioBtn() {
    return cy.get('label[for="gender-radio-2"]');
  }

  get mobileNumberInput() {
    return cy.get('#userNumber');
  }

  get birthDateInput() {
    return cy.get('#dateOfBirthInput');
  }

  get subjectInput() {
    return cy.get('#subjectsInput');
  }

  get sportsCheckbox() {
    return cy.get('#hobbies-checkbox-1');
  }

  get readingCheckbox() {
    return cy.get('#hobbies-checkbox-2');
  }

  get musicCheckbox() {
    return cy.get('#hobbies-checkbox-3');
  }

  get addressInput() {
    return cy.get('#currentAddress');
  }

  get stateDropdown() {
    return cy.get('#react-select-3-input');
  }

  get cityDropdown() {
    return cy.get('#react-select-4-input');
  }

  get submitBtn() {
    return cy.get('#submit');
  }

  get successSubmitForm() {
    return cy.get('.modal-content');
  }

  get successSubmitFormTitle() {
    return cy.get('#example-modal-sizes-title-lg');
  }

  fillRegisterFields({ firstName, lastName, email, mobileNumber, subject, address }) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.mobileNumberInput.type(mobileNumber);
    this.subjectInput.type(subject).type('{enter}');
    this.addressInput.type(address);
  }
}
