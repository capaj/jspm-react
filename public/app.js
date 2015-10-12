import React from 'react'
import ReactIntl from 'react-intl'
import { Router, Route } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Home from './routes/home'
window.ReactIntl = ReactIntl

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// var knex = nexridge('http://localhost:8197')

class RenderForcer extends React.Component {
  constructor () {
    super()
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <Router>
     <Route path='/' component={Home}/>
   </Router>
  }
}

React.render((
  <RenderForcer/>
), document.getElementById('app'))

System.import('jspm_packages/npm/react-intl@1.2.0/dist/locale-data/' + navigator.language)
