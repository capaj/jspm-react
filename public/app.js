import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Router, Route } from 'react-router'

import Home from './routes/home'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
addLocaleData(en)

class RenderForcer extends React.Component {
  constructor () {
    super()
  }
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <IntlProvider locale='en'>
      <Router history={browserHistory}>
        <Route path='/' component={Home}/>
     </Router>
    </IntlProvider>
  }
}

ReactDOM.render((
  <RenderForcer/>
), document.getElementById('app'))
