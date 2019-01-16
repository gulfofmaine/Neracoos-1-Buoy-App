/*global cy*/

describe("Platfrom N01", () => {
  it("Can get to from Home Page", () => {
    cy.visit("/")

    cy.contains("Regions").click()
    cy.contains("Gulf Of Maine").click()

    cy.contains("N01").click()

    cy.contains("Buoy N01")
  })

  it("Shows platform status", () => {
    cy.visit("/#/platform/N01")

    cy.contains("Lat:")
    cy.contains("Lon:")

    cy.contains("Last updated at:")
  })

  it("Shows current conditions", () => {
    cy.visit("/#/platform/N01")

    cy.contains("Current Conditions")
    cy.contains("Winds -")

    cy.get("[style='margin-top: 1rem;'] > :nth-child(2) > .row")
      .children()
      .should("have.length", 6)

    cy.contains("Knots")
  })

  it("Shows wind plot", () => {
    cy.visit("/#/platform/N01")

    cy.contains("Observations").click()
    cy.get("[href='#/platform/N01/observations/wind']")
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
    cy.visit("/#/platform/N01")

    cy.contains("Forecasts loading")
    cy.get("#forecast").click()
    cy.get('[href="#/platform/N01/forecast/wave_height"]').click()
    cy.get("h4").contains("Wave Height Forecast")

    cy.get("svg.highcharts-root").contains("Meters")
    cy.get("svg.highcharts-root")
      .contains("Observed Wave height")
      .click()
  })

  it("Has More info menu", () => {
    cy.visit("/#/platform/N01")

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
    cy.visit("/#/platform/N01")

    cy.contains("Last updated at:").then($element => {
      const text = $element[0].parentElement.innerText

      const date = new Date(text.split("Last updated at: "))

      const threeDaysAgo = new Date()
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

      expect(date).greaterThan(threeDaysAgo)
    })
  })
})
