import React, {PropTypes} from 'react'
import counter from '../stores/example-store'
import {observer} from 'mobservable-react'

const Test = (props) => {
  return <div onClick={() => counter.value++}>click to increase counter value: {counter.value}</div>
}

Test.propTypes = {
  name: PropTypes.string
}

export default observer(Test)
