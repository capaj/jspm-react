/* eslint-env node, mocha */
const expect = (require('chai')).expect
// import { addons } from 'react/addons'
import System from 'systemjs'
import '../../public/config'
System.config({
  baseUrl: '/public'  // doesn't have a wanted effect
})
import React from 'react'
import { shallow } from 'enzyme'

describe.skip('Home route', function () {
  it('should show a route content', function () {
    return System.import('./routes/home').then((Home) => {
      const wrapper = shallow(<Home/>)
      return expect(wrapper).to.contain('Home route')
    })
  })
})
