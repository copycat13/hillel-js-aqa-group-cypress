import { BasePage } from './base.mjs';

export class CheckboxPage extends BasePage {
  constructor() {
    super('/checkbox');
  }

  get homeToggle() {
    return cy.get('label[for="tree-node-home"]').prev('button');
  }

  get documentsToggle() {
    return cy.get('label[for="tree-node-documents"]').prev('button');
  }

  get officeToggle() {
    return cy.get('label[for="tree-node-office"]').prev('button');
  }

  get privateCheckbox() {
    return cy.get('label[for="tree-node-private"] .rct-checkbox');
  }

  get resultForSelected() {
    return cy.get('#result');
  }
}
