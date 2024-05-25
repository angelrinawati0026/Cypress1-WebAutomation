describe('Register', () => {
    beforeEach(() => {
      cy.visit('https://demowebshop.tricentis.com')
    })
    it('Failed Register - Character Pass min 6', () => {
        const product = 'computer'
        cy.title().should('include','Demo Web Shop')
        cy.get('#small-searchterms').type(product)
        cy.get('form > .button-1').click()
        cy.url().should('contain','q=computer')
        cy.title().should('include','Demo Web Shop. Search')


    })
  })