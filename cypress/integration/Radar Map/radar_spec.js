describe('Radar Page', () => {
    it('Can visit the Radar Map from Home Page', () => {
        cy.visit('/')

        cy.contains('Radar Map').click()

        cy.get('.ol-zoom-in').click()
    })
})