/*global cy*/

describe("Home page", function () {
  it("Loads Drupal content", function () {
    cy.visit("/")

    cy.contains("The Mariners' Dashboard provides near real-time data for buoys and sensors in the Northeast.")
  })

  it("Has a nav bar", () => {
    cy.visit("/")

    cy.get(".navbar-brand")
    cy.contains("Regions")
    // cy.contains("Radar Map")
    cy.contains("About")
  })

  it("Has a footer", () => {
    cy.visit("/")

    cy.get(".footer").contains("Copyright").contains("NERACOOS")

    cy.get(".footer").contains(
      "Product of NERACOOS.org - Developed and maintained by the Gulf of Maine Research Institute"
    )
  })
})
