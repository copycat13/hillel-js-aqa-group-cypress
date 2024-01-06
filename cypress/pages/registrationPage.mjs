import { BasePage } from './base.mjs'

export class RegistrationPage extends BasePage {
  constructor(){
    super('auth/register')
  }

  fullNameInput(){
     return cy.get('#input-name')
  }

  emailInput(){
     return cy.get('#input-email')
  }

  passwordInput(){
     return cy.get('#input-password')
  }

  repeatPasswordInput(){
     return cy.get('#input-re-password')
  }

  termsAndConditionsCheckbox(){
     return cy.get('span[class="custom-checkbox"]')
  }

  registerBtn(){
     return cy.get('button').contains('Register', {matchCase: false})
  }

  fillRegisterFields({fullName, email, password, repeatPassword}){
     this.fullNameInput().type(fullName)
     this.emailInput().type(email)
     this.passwordInput().type(password)
     this.repeatPasswordInput().type(repeatPassword)
  }
}
