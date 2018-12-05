/**
 * Root module for the Mariners Dashboard.
 */

import * as Sentry from '@sentry/browser'
import { ConnectedRouter } from 'connected-react-router'

import moment from 'moment-timezone'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import { HashRouter } from 'react-router-dom'

declare global {
  interface Window { moment: any }
}

window.moment = moment

/**
 * Load our package.json so that we can access the version
 * and allow Sentry to track errors in relation to the version used
 */
// tslint:disable-next-line:no-var-requires
const packageJson = require('../package.json')

Sentry.init({
  dsn: 'https://eab04522f42c4efab9d5bfe7d8594e9c@sentry.io/1270344',
  beforeSend(event: Sentry.SentryEvent) {
    if (event.exception) {
      Sentry.showReportDialog()
    }
    return event
  },
  release: packageJson.version
})

import App from './App';
import './index.css';
import { history, store } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Render our root element of the App. 
 * Everything else descends from this render.
 */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
