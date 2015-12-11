/* eslint-env node, mocha */
const expect = (require('chai')).expect

import React from 'react'
import { render } from 'enzyme'

describe('Home route', function () {
  it('should show a route content', function () {
    return System.import('routes/home').then((Home) => {
      Home = Home.default
      const wrapper = render(<Home/>)
      // console.log(wrapper.html())
      return expect(wrapper.text()).to.contain('Home route')
    })
  })
})
