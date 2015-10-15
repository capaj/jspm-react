import React from 'react'

const Test = (props) => {
  return <div onClick={() => console.log('clicked2')}>helo {props.name}</div>
}

export default Test
