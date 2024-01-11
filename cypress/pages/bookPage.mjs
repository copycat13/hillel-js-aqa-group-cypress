import { BasePage } from './base.mjs';

export class BookPage extends BasePage {
  constructor() {
    super('/books');
  }

  get bookActions() {
    return cy.get('.action-buttons');
  }

  get bookTitle() {
    return cy.get('#title-wrapper #userName-value');
  }

  get bookSubTitle() {
    return cy.get('#subtitle-wrapper #userName-value');
  }

  get bookAuthor() {
    return cy.get('#author-wrapper #userName-value');
  }
}
