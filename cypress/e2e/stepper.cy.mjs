import { StepperPage } from '../pages/stepperPage.mjs'

describe('Step content', ()=>{

  beforeEach(()=>{
    cy.init()
  })

  it('Should have correct titles on each step', ()=>{
    const page = new StepperPage()
    page.visit()
    page.stepTitle().should('have.text', 'Step content #1')
    page.nextBtn().click()
    page.stepTitle().should('have.text', 'Step content #2')
    page.nextBtn().click()
    page.stepTitle().should('have.text', 'Step content #3')
    page.nextBtn().click()
    page.stepTitle().should('have.text', 'Step content #4')
    page.nextBtn().should('be.disabled')
  })
})
