/*global cy*/

describe("About Page", () => {
  it("Can visit About Page from Home Page", () => {
    cy.visit("/")

    cy.contains("About").click()

    cy.contains("Platform data provided by")
  })

  it("Loads Wagtail Content", () => {
    cy.visit("/about/")

    cy.contains("Platform data provided by:")
  })
})
