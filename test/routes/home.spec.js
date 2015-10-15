/* eslint-env node, mocha */
const jsdom = require('mocha-jsdom')
const expect = (require('chai')).expect
// import { addons } from 'react/addons'
import ReactDOM from 'react-dom'
import React from 'react'
import Home from '../../public/routes/home'

describe('Home route', function () {
  jsdom()
  beforeEach(function () {
    global.location = {
      hash: '',
      search: ''
    }

    ReactDOM.render((
      <Home/>
    ), document.body)
  })

  it('should show a counter value', function () {
    return expect(document.body.innerHTML).to.contain('Home route')
  })

  it('should show an alert on click', function () {
    // let btn = document.querySelector('button')
    // expect(btn.innerHTML).to.contain('1')
    // return addons.TestUtils.Simulate.click(btn)
  })
})
