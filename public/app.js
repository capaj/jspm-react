import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Home from './routes/home'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
addLocaleData(en)

const routes = <Route path='/' component={Home} />

class RenderForcer extends React.Component {
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <IntlProvider locale='en'>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  }
}

ReactDOM.render((
  <RenderForcer />
), document.getElementById('app'))
