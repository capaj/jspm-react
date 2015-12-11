import React, {PropTypes} from 'react'

const Test = (props) => {
  return <div onClick={() => console.log('clicked2')}>hello {props.name}</div>
}

Test.propTypes = {
  name: PropTypes.string
}

export default Test
