describe('Mooring location regressions', () => {
    it('Finds the correct location for B01', () => {
        cy.visit('/#/platform/B01')
        cy.get('.card-text').contains('Western Maine Shelf')
    })

    it('Finds the correct location for I01', () => {
        cy.visit('/#/platform/I01')
        cy.get('.card-text').contains('Eastern Maine Shelf')
    })
})