/*global cy*/

const platformUrl = "/platform/A01%20-%2044029"

describe("Units", () => {
  it("Switching units updates units displayed", () => {
    cy.visit(platformUrl)

    cy.get(".container-fluid").contains("Knots")
    cy.get(".container-fluid").contains("Fahrenheit")
    cy.get(".container-fluid").contains("Nautical Miles")

    cy.get(".container-fluid").contains("Meters/Second").should("not.exist")
    cy.get(".container-fluid").contains("Celsius").should("not.exist")
    cy.get(".container-fluid").contains("Kilometers").should("not.exist")

    cy.get(".container-fluid").contains("Metric").click()

    cy.get(".container-fluid").contains("Knots").should("not.exist")
    cy.get(".container-fluid").contains("Fahrenheit").should("not.exist")
    cy.get(".container-fluid").contains("Nautical Miles").should("not.exist")

    cy.get(".container-fluid").contains("Meters/Second")
    cy.get(".container-fluid").contains("Celsius")
    cy.get(".container-fluid").contains("Kilometers")

    cy.get(".container-fluid").contains("English").click()

    cy.get(".container-fluid").contains("Knots")
    cy.get(".container-fluid").contains("Fahrenheit")
    cy.get(".container-fluid").contains("Nautical Miles")

    cy.get(".container-fluid").contains("Meters/Second").should("not.exist")
    cy.get(".container-fluid").contains("Celsius").should("not.exist")
    cy.get(".container-fluid").contains("Kilometers").should("not.exist")
  })
})
