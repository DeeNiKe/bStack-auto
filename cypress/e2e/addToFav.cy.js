/// <reference types = "cypress"/>

import { favourites } from "./Pages/favourites"
const favourite = new favourites

it('Add to favourites', () => {
    cy.visit('https://bstackdemo.com/')

    //click on favourite button for iPhone 12
    cy.get('#\\31  > .shelf-stopper > .MuiButtonBase-root').click()
    favourite.clickOnFavourites()

})
