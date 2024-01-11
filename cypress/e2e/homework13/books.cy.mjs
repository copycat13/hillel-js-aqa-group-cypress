import { BookPage } from '../../pages/bookPage.mjs';

const modifiedBookData = {
  isbn: '9780702300172',
  title: 'The Ballad of Songbirds & Snakes',
  subTitle: 'The Hunger Games',
  author: 'Suzanne Collins',
  publish_date: '2020-05-19',
  publisher: 'O Reilly Media',
  pages: 234,
  description:
    'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp',
  website: 'http://chimera.labs.oreilly.com/books/1230000000561/index.html',
};

describe('BookStore API tests', () => {
  it('Test 1: should modify data for the first book', () => {
    const bookPage = new BookPage();
    bookPage.visit();
    cy.intercept('GET', '/BookStore/v1/Book?ISBN=9781449325862', modifiedBookData);
    bookPage.bookActions.first().click();
    bookPage.bookTitle.should('be.visible').and('have.text', modifiedBookData.title);
    bookPage.bookSubTitle.should('be.visible').and('have.text', modifiedBookData.subTitle);
    bookPage.bookAuthor.should('be.visible').and('have.text', modifiedBookData.author);
  });

  it('Test 2: should make a request for a book data and check the response', () => {
    const isbn = '9781449331818';

    cy.request({
      method: 'GET',
      url: '/BookStore/v1/Book',
      qs: {
        ISBN: isbn,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(Object.keys(response.body).length).to.be.greaterThan(0);
      expect(response.body).to.have.property('isbn').to.equal(isbn);
    });
  });
});
