// Router
// =============================

import React                        from 'react'
import {render}                     from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App                          from './modules/app'
import About                        from './modules/about'
require('../styles/main.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
