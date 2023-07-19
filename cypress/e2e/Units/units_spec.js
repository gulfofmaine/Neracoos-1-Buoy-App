/*global cy*/

const platformUrl = "/platform/E01"

describe("Units", () => {
  it("Switching units updates units displayed", () => {
    cy.visit(platformUrl)

    cy.contains("Knots")
    cy.contains("Fahrenheit")
    cy.contains("Nautical Miles")

    cy.contains("Meters/Second").should("not.exist")
    cy.contains("Celsius").should("not.exist")
    cy.contains("Kilometers").should("not.exist")

    cy.contains("Metric").click()

    cy.contains("Knots").should("not.exist")
    cy.contains("Fahrenheit").should("not.exist")
    cy.contains("Nautical Miles").should("not.exist")

    cy.contains("Meters/Second")
    cy.contains("Celsius")
    cy.contains("Kilometers")

    cy.contains("English").click()

    cy.contains("Knots")
    cy.contains("Fahrenheit")
    cy.contains("Nautical Miles")

    cy.contains("Meters/Second").should("not.exist")
    cy.contains("Celsius").should("not.exist")
    cy.contains("Kilometers").should("not.exist")
  })
})
