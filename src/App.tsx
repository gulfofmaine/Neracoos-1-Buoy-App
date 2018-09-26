import * as React from 'react';
import { Route, Switch } from 'react-router'

import NavBar from '@app/components/NavBar'

import AboutPage from '@app/Pages/About'
import HomePage from '@app/Pages/Home'
import MapPage from '@app/Pages/Map'
import PlatformsPage from '@app/Pages/Platforms'

import './App.css';
import { paths } from './constants';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavBar />
        
        <div className="container-fluid">
        
          <Switch>
            <Route exact={true} path={paths.home} component={HomePage} />
            <Route path={paths.platforms.root} component={PlatformsPage} />
            <Route path={paths.platforms.platform} component={PlatformsPage} />
            <Route path={paths.map} component={MapPage} />
            <Route path={paths.about} component={AboutPage} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
