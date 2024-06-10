import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function InsideLayout() {
  return (
    <div>
        <ul>
            <li><Link to="/Props_vs_State/Props">Props</Link></li>
            <li><Link to="/Props_vs_State/State">State</Link></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default InsideLayout