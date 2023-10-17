/*global cy*/

const platformUrl = "/platform/M01"

describe("Platfrom M01", () => {
  it("Can get to from Home Page", () => {
    cy.visit("/")

    cy.contains("Regions").click()
    cy.contains("Gulf Of Maine").click()

    cy.contains("M01").click()

    cy.contains("Station M01")
    cy.contains("NDBC ID: 44037")
  })

  it("Will get redirected", () => {
    cy.visit("/platform/M01%20-%2044037")
    cy.location("pathname").should("eq", platformUrl)
  })

  it("Shows platform status", () => {
    cy.visit(platformUrl)

    cy.contains("Lat:")
    cy.contains("Lon:")

    cy.contains("Last updated at:")
  })

  xit("Shows current conditions", () => {
    cy.visit(platformUrl)

    cy.contains("Latest Conditions")
    cy.contains("Air Temperature -")

    cy.get("[style='margin-top: 1rem;'] > :nth-child(2) .card").should("have.length.be.gte", 3)
  })

  it("Shows air temp plot", () => {
    cy.visit(platformUrl)

    cy.contains("Air Temperature:").click()

    cy.get("h4").contains("Air Temperature")
  })

  xit("Shows wind plot", () => {
    cy.visit(platformUrl)

    cy.contains("Observations").click()
    cy.get('[href="/platform/M01/observations/wind"]').first().click()
    cy.get("h4").contains("Wind")
    cy.get("svg.highcharts-root")
    cy.get("svg.highcharts-root").contains("Gust").click()
    cy.get("svg.highcharts-root").contains("Speed").click()
    cy.get("svg.highcharts-root").contains("Direction").click()
    cy.get("svg.highcharts-root").contains("Knots")
  })

  it("Shows wave forecast", () => {
    cy.visit(platformUrl)

    cy.contains("Forecasts loading")
    cy.get("#forecast").click()
    cy.get("[href='/platform/M01/forecast/significant_wave_height']").click()
    cy.get("h4").contains("Significant Wave Height Forecast")

    cy.get("svg.highcharts-root").contains("Feet")
    cy.contains("Metric").click()
    cy.get("svg.highcharts-root").contains("Meters")
    cy.contains("English").click()
    cy.get("svg.highcharts-root").contains("Feet")
    cy.contains("Significant Wave Height - observations").click()
    // cy.get("svg.highcharts-root").contains("Bedford Institute Wave Model - Height").click()
    // cy.get("svg.highcharts-root").contains('Northeast Coastal Ocean Forecast System')
  })

  it("Has More info menu", () => {
    cy.visit(platformUrl)

    cy.contains("More info").click()
    cy.contains("More info").parent().children().last().children().should("have.length", 2)

    cy.contains("Marine Forecast")
    cy.contains("Tides")
  })

  it("Updated recently", () => {
    cy.visit(platformUrl)

    cy.contains("Observations").click()
    cy.contains("All Observations").click()

    cy.get(".all-observations")
      .contains("Last updated at:")
      .then(($element) => {
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

    cy.contains("Sigma-T @ 1m")
  })
})
