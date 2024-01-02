import { BasePage } from './base.mjs'

export class DialogPage extends BasePage {
  constructor(){
    super('/pages/modal-overlays/dialog')
  }

  returnResultBlock(){
    return cy.get('div:nth-child(5) > nb-card')
  }

  enterNameBtn(){
    return this.returnResultBlock().find('button').contains('Enter Name', {matchCase: false})
  }

  enterNameModal(){
    return cy.get('nb-dialog-container')
  }

  enterNameHeader(){
    return this.enterNameModal().find('nb-card-header').contains('Enter your name', {matchCase: false})
  }

  nameInput(){
    return this.enterNameModal().find('input[placeholder="Name"]')
  }

  cancelBtn(){
    return this.enterNameModal().find('button').contains('Cancel', {matchCase: false})
  }

  submitBtn(){
    return this.enterNameModal().find('button').contains('Submit', {matchCase: false})
  }
}
