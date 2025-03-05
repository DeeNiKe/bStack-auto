export class favourites{
    favouritesBreadCrum = 'Favourites'
    numberOfProducts = ''

    clickOnFavourites(){
        cy.contains(this.favouritesBreadCrum).click()
    }
}