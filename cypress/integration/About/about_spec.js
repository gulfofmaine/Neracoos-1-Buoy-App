/*global cy*/

describe("About Page", () => {
  it("Can visit About Page from Home Page", () => {
    cy.visit("/")

    cy.contains("About").click()

    cy.contains("developed to improve")
  })

  it("Loads Drupal Content", () => {
    cy.visit("/about/")

    cy.contains("developed to improve")
  })
})
