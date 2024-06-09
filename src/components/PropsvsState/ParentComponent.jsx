import {Link, Outlet} from 'react-router-dom'
import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  const data = "hello world"
  const data1 = "123456789"
  return (
    <div>
      <div>
        <ChildComponent data={data} data1={data1}/>
      </div>

    </div>
  )
}

export default ParentComponent