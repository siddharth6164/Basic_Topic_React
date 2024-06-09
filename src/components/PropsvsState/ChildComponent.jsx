import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <p>{props.data}</p>
      <p>{props.data1}</p>
    </div>
  )
}

export default ChildComponent