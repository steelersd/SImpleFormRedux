import React from "react";
import ReactDOM from "react-dom";
import NameFormContainer from './NameFormContainer'
import Display from './Display'
import Info from './Info'
import Section from './styles/Section'
import "./styles.css";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store/configureStore'

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
)


