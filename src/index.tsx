import * as Sentry from '@sentry/browser'
import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import { HashRouter } from 'react-router-dom'

// tslint:disable-next-line:no-var-requires
const packageJson = require('../package.json')

Sentry.init({
  dsn: 'https://eab04522f42c4efab9d5bfe7d8594e9c@sentry.io/1270344',
  release: packageJson.version
})

import App from './App';
import './index.css';
import { history, store } from './store'

// // import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker'

// unregister()

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
