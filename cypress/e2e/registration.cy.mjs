import { RegistrationPage } from "../pages/registrationPage.mjs";

describe('Registration page inputs validation', () => {
     
     beforeEach(()=>{
          cy.init()
          const registrationPage = new RegistrationPage
          registrationPage.visit()
        })
   
     it('should register user with valid data', () => {
       cy.fixture('registrationData.json').then((data) => {
         const {validUser} = data
         cy.registerUser(validUser)
       });
     });
   
     it('should display an error for invalid full name input', () => {
          cy.fixture('registrationData.json').then((data) => {
            const registrationPage = new RegistrationPage
            const {invalidFullName} = data
            registrationPage.fillRegisterFields(invalidFullName)
            registrationPage.fullNameInput().next('p').should('have.text', ' Full name should contains from 4 to 50 characters ')
            registrationPage.termsAndConditionsCheckbox().click()
            registrationPage.registerBtn().should('be.visible').and('be.disabled')
          })
        })

     it('should display an error for invalid email input', () => {
       cy.fixture('registrationData.json').then((data) => {
          const registrationPage = new RegistrationPage
          const {invalidEmail} = data
          registrationPage.fillRegisterFields(invalidEmail)
          registrationPage.emailInput().next('p').should('have.text', ' Email should be the real one! ')
          registrationPage.termsAndConditionsCheckbox().click()
          registrationPage.registerBtn().should('be.visible').and('be.disabled')
       })
     })
   
     it('should display an error for weak password input', () => {
       cy.fixture('registrationData.json').then((data) => {
          const registrationPage = new RegistrationPage
          const {weakPassword} = data;
          registrationPage.fillRegisterFields(weakPassword);
          registrationPage.passwordInput().next('p').should('have.text', ' Password should contain from 4 to 50 characters ')
          registrationPage.termsAndConditionsCheckbox().click()
          registrationPage.registerBtn().should('be.visible').and('be.disabled')
       })
     })

     it('should display an error for password mismatch', () => {
          cy.fixture('registrationData.json').then((data) => {
             const registrationPage = new RegistrationPage
             const {passwordMismatch} = data;
             registrationPage.fillRegisterFields(passwordMismatch);
             registrationPage.repeatPasswordInput().next('p').should('have.text', ' Passwords do not match ')
             registrationPage.termsAndConditionsCheckbox().click()
             registrationPage.registerBtn().should('be.visible').and('be.disabled')
          })
        })

        it('register button should be disabled when terms and conditions checkbox is unchecked', () => {
          cy.fixture('registrationData.json').then((data) => {
             const registrationPage = new RegistrationPage
             const {validUser} = data;
             registrationPage.fillRegisterFields(validUser);
             registrationPage.termsAndConditionsCheckbox().should('not.be.checked')
             registrationPage.registerBtn().should('be.visible').and('be.disabled')
          })
        })
   })
   