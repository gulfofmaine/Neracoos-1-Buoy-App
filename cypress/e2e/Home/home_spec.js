/*global cy*/

describe("Home page", function () {
  it("Loads Drupal content", function () {
    cy.visit("/")

    cy.contains(
      "Welcome to the NERACOOS Mariners' Dashboard, which delivers high-quality, timely data from a growing network of buoys and sensors into the hands of mariners heading to sea.",
    )
  })

  it("Has a nav bar", () => {
    cy.visit("/")

    cy.get(".navbar-brand")
    cy.contains("Regions")
    cy.contains("About")
  })

  it("Has a footer", () => {
    cy.visit("/")

    cy.get(".footer").contains("Copyright").contains("NERACOOS")

    cy.get(".footer").contains(
      "Product of NERACOOS.org - Developed and maintained by the Gulf of Maine Research Institute",
    )
  })

  it("Has superlatives", () => {
    cy.visit("/")

    cy.contains("Highest Winds")

    cy.contains("Knots")

    cy.contains("Biggest Waves")

    cy.contains("Feet")
  })
})
