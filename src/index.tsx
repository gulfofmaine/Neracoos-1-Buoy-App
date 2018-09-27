import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import { HashRouter } from 'react-router-dom'

import App from './App';
import './index.css';
import { history, store } from './store'

// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker'

unregister()

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
