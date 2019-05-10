/*global cy*/

describe("About Page", () => {
  it("Can visit About Page from Home Page", () => {
    cy.visit("/")

    cy.contains("About").click()

    cy.contains("Content for Mariners Dashboard About Page")
  })

  it("Loads Wagtail Content", () => {
    cy.visit("/about/")

    cy.contains("Content for Mariners Dashboard About Page")
  })
})
