
it('Filter for samsung phones', function(){
    cy.visit('https://bstackdemo.com/')
    cy.get(':nth-child(3) > label > .checkmark').click()


    //verify 7 phones available
    cy.get('.products-found > span').should('contain','7 Product(s) found.')

    //verify samsung phones available
    cy.get('#\\31 0 > .shelf-item__title').should('contain','Galaxy S20')

})