/*global cy*/

describe("Region: Long Island", () => {
  it("Can show Long Island", () => {
    cy.visit("/")

    cy.contains("Regions").click()
    cy.contains("Long Island").click()
  })

  it("Shows only a subset of platforms", () => {
    cy.visit("/platform/?region=LONG")

    cy.get("h2").contains("Platforms in Long Island Sound")

    cy.get(".list-group")
      .children()
      .should("have.length", 5)

    cy.get(".ol-attribution > button > span")
  })
})
