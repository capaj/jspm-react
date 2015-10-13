/* eslint-env node, mocha */
const jsdom = require('mocha-jsdom')
const expect = (require('chai')).expect
import { addons } from 'react/addons'

describe('Subscription', function () {
  jsdom()
  let Home
  beforeEach(function () {
    global.location = {
      hash: '',
      search: ''
    }

    Home = require('../../public/routes/home')
    console.log(Home)
  })

  it('should show a counter value', function () {
    return expect(document.body.innerHTML).to.contain('0')
  })
  it('should increment on click', function () {

    let btn = document.querySelector('button')
    expect(btn.innerHTML).to.contain('1')
    return addons.TestUtils.Simulate.click(btn)
  })
})
