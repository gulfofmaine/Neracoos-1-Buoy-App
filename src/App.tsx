/**
 * While index.tsx contains much of the plumbing related to routing, redux, and exception handling,
 * App.tsx contains much more of our app structure, including our high level formatting, and routes
 * to seperate pages.
 */

import * as React from "react"
import { Route, Routes } from "react-router"

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
          <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.platforms.root_tailing} element={<PlatformsPage />} />
            <Route path={paths.about} element={<AboutPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    )
  }
}

export default App
