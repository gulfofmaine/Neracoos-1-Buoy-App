/**
 * While index.tsx contains much of the plumbing related to routing, redux, and exception handling,
 * App.tsx contains much more of our app structure, including our high level formatting, and routes
 * to seperate pages.
 */

import * as React from "react"
import { Route, Switch } from "react-router"

import Footer from "components/Footer"
import NavBar from "components/NavBar"

import AboutPage from "Pages/About"
import HomePage from "Pages/Home"
import PlatformsPage from "Pages/Platforms"

import { paths } from "./Shared/constants"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavBar />

        <div className="container-fluid">
          {/* Switch chooses the first route that matches the user has navigated to.
            Otherwise any relevant Route would be chosen */}
          <Switch>
            <Route exact={true} path={paths.home} component={HomePage} />
            <Route path={paths.platforms.platform} component={PlatformsPage} />
            <Route path={paths.platforms.root} component={PlatformsPage} />
            <Route path={paths.about} component={AboutPage} />
          </Switch>

          <Footer />
        </div>
      </div>
    )
  }
}

export default App
