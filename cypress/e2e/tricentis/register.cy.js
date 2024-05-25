describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })
  it('Failed Register - Character Pass min 6', () => {
    cy.get('#gender-female').check()
    cy.get('#FirstName').type('angel')
    cy.get('[name="LastName"]').type('steele') //krn ada tanda petik masukkan ke []
    cy.get('#Email').type('steeleangel10@gmail.com')
    cy.get('#Password').type('st')
    cy.get('#ConfirmPassword').type('st')
    cy.get('.field-validation-error > span').should('contain.text','The password should have at least 6 characters.')
  })
  it('Failed Register - Unmatch Password', () => {
    cy.get('#gender-female').check()
    cy.get('#FirstName').type('angel')
    cy.get('[name="LastName"]').type('steele') //krn ada tanda petik masukkan ke []
    cy.get('#Email').type('steeleangel10@gmail.com')
    cy.get('#Password').type('steeleangel8')
    cy.get('#ConfirmPassword').type('steeleangel9')
    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text','The password and confirmation password do not match.')
  })
  it.only('Failed Register - Invalid Email', () => {
    cy.get('#gender-female').check()
    cy.get('#FirstName').type('angel')
    cy.get('[name="LastName"]').type('steele') //krn ada tanda petik masukkan ke []
    cy.get('#Email').type('steeleangel10')
    cy.get('#Password').type('steeleangel8')
    cy.get('#ConfirmPassword').type('steeleangel8')
    cy.get(':nth-child(4) > .field-validation-error > span').should('contain.text','Wrong email')
  })
})