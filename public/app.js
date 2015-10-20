import React from 'react'
import ReactDOM from 'react-dom'
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

class RenderForcer extends React.Component {
  constructor () {
    super()
  }
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <Router>
     <Route path='/' component={Home}/>
   </Router>
  }
}

ReactDOM.render((
  <RenderForcer/>
), document.getElementById('app'))

var lang = window.navigator.languages ? window.navigator.languages[0] : null
lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage
if (lang.indexOf('-') !== -1) lang = lang.split('-')[0]
if (lang.indexOf('_') !== -1) lang = lang.split('_')[0]
System.import('jspm_packages/npm/react-intl@2.0.0-pr-2/dist/locale-data/' + lang)
