import { Url } from './utils/types'
/// <reference types="Cypress" />

describe('My first e2e test', () =>{
  beforeEach(()=>{
    const url: Url = '/';
    cy.visit(url)
  })
  it('checking succesfully render the page', () => {
    cy.contains('Pipe')
    cy.contains('Coupling')
    cy.contains('Valve')
    cy.contains('Drip')
    cy.contains('Reducer')
    cy.contains('Label')
  }) 
  it('checking side bar options', () => {
    cy.get('[data-cy="option-side-bar"]').should('have.length', 6)
  })
  it('checking Pipe option', () => {

    cy.get('[data-cy="option-side-bar"]').eq(0).should('contain', 'Pipe').click()
    cy.get('[data-cy="rmm-select-material"]').click()
    cy.contains('PE').click()

    cy.get('[data-cy="rmm-select-method"]').click()
    cy.contains('DB').click()

    cy.get('[data-cy="rmm-select-size"]').click()
    cy.contains('4"').click()

    cy.get('[data-cy="rmm-select-pressure"]').click()
    cy.contains('LP').click()

    cy.get('[data-cy="rmm-input-year"]').type('2020') 
    cy.get('[data-cy="rmm-input-length"]').type('200') 

    // cy.get('[data-cy="rmm-slider-cover"]').trigger('mousedown', { button: 0 }).trigger('mousemove', { which: 20 })
    // .trigger('mouseup')
  
  }) 
})
