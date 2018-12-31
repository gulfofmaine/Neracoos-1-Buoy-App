/*global cy*/

describe("Home page", function() {
  it("Loads Drupal content", function() {
    cy.visit("/")

    cy.contains("feedback!")
  })

  it("Has a nav bar", () => {
    cy.visit("/")

    cy.get(".navbar-brand")
    cy.contains("Regions")
    cy.contains("Radar Map")
    cy.contains("About")
  })
})
