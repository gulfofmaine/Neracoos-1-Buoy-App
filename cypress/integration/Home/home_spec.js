/*global cy*/

describe("Home page", function() {
  it("Loads Drupal content", function() {
    cy.visit("/")

    cy.contains("Content for")
  })

  it("Has a nav bar", () => {
    cy.visit("/")

    cy.get(".navbar-brand")
    cy.contains("Regions")
    cy.contains("Radar Map")
    cy.contains("About")
  })

  it("Has a footer", () => {
    cy.visit("/")

    cy.get(".footer")
      .contains("Copyright")
      .contains("NERACOOS")

    cy.get(".footer").contains("Website and products developed")

    cy.get(".footer img")
      .its("length")
      .should("be.equal", 4)

    cy.get(".footer").contains("Regional Coastal Observing Systems")

    cy.get(".footer").contains("National Observing System Partners")
  })
})
