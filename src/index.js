import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './common/dependecies'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept()
}
