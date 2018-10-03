import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import Routes from './main/routes'

import reducers from './main/reducers'

import * as serviceWorker from './serviceWorker'
import './common/utils/dependecies'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()

// if (module.hot) {
//   module.hot.accept()
// }
