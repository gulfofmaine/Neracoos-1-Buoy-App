/*global cy*/

const platformUrl = "/platform/M01"

describe("Platfrom M01", () => {
  it("Can get to from Home Page", () => {
    cy.visit("/")

    cy.contains("Regions").click()
    cy.contains("Gulf Of Maine").click()

    cy.contains("M01").click()

    cy.contains("Station M01")
  })

  it("Shows platform status", () => {
    cy.visit(platformUrl)

    cy.contains("Lat:")
    cy.contains("Lon:")

    cy.contains("Last updated at:")
  })

  it("Shows current conditions", () => {
    cy.visit(platformUrl)

    cy.contains("Current Conditions")
    cy.contains("Winds -")

    cy.get("[style='margin-top: 1rem;'] > :nth-child(2) > .row")
      .children()
      .should("have.length", 8)

    cy.contains("Knots")
  })

  it("Shows wind plot", () => {
    cy.visit(platformUrl)

    cy.contains("Observations").click()
    cy.get("[href='/platform/M01/observations/wind']")
      .first()
      .click()
    cy.get("h4").contains("Wind")
    cy.get("svg.highcharts-root")
    cy.get("svg.highcharts-root")
      .contains("Gust")
      .click()
    cy.get("svg.highcharts-root")
      .contains("Speed")
      .click()
    cy.get("svg.highcharts-root")
      .contains("Direction")
      .click()
    cy.get("svg.highcharts-root").contains("Knots")
  })

  it("Shows wave forecast", () => {
    cy.visit(platformUrl)

    cy.contains("Forecasts loading")
    cy.get("#forecast").click()
    cy.get("[href='/platform/M01/forecast/wave_height']").click()
    cy.get("h4").contains("Wave Height Forecast")

    cy.get("svg.highcharts-root").contains("Meters")
    // cy.contains("Significant Wave Height observed").click()
    cy.get("svg.highcharts-root")
      .contains("Bedford Institute Wave Model - Height")
      .click()
  })

  it("Has More info menu", () => {
    cy.visit(platformUrl)

    cy.contains("More info").click()
    cy.contains("More info")
      .parent()
      .children()
      .last()
      .children()
      .should("have.length", 10)

    cy.contains("All Data From This Station")
    cy.contains("Compare Stations")
    cy.contains("Graphing and Download")
    cy.contains("12 Hour History")
    cy.contains("Station Description")
    cy.contains("Quick History")
    cy.contains("Explanation of Data Types")
    cy.contains("Marine Forecast")
    cy.contains("Tides")
  })

  it("Updated recently", () => {
    cy.visit(platformUrl)

    cy.contains("Last updated at:").then($element => {
      const text = $element[0].parentElement.innerText

      const date = new Date(text.split("Last updated at: "))

      const threeDaysAgo = new Date()
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

      expect(date).greaterThan(threeDaysAgo)
    })
  })

  it("Can view all observations", () => {
    cy.visit(platformUrl)

    cy.contains("Observations").click()
    cy.contains("All Observations").click()

    cy.contains("Sigma-T @ 100m")
  })
})
