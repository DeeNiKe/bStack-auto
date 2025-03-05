
/* this spec file is for sign in and order a phone
for this demo site. steps as following:

*/

it('Order a phone', function(){
    cy.visit('https://bstackdemo.com/')
    cy.contains('Add to cart').click()
    cy.contains('Checkout').click()
    cy.get('#username > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-2-option-0-0').click()
    cy.get('#password > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-3-option-0-0').click()
    cy.get('#login-btn').click()

    //filling the form
    cy.get('#firstNameInput').type('userfirst')
    cy.get('#lastNameInput').type('userlast')
    cy.get('#addressLine1Input').type('usertestaddress')
    cy.get('#provinceInput').type('testprovince')
    cy.get('#postCodeInput').type('12345')

    //checking the price and the phone type
    cy.get('.product-title').should('contain','iPhone 12')
    cy.get('.cart-priceItem-value > span').should('contain','$799.00')

    cy.get('#checkout-shipping-continue').click()

    //verify order confirmation
    cy.get('[data-test="shipping-address-heading"]').should('contain','Your Order has been successfully placed.')

    //clicking on continoue shopping button
    cy.get('.button').click()

})