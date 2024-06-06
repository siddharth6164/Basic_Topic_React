import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <ul>
            <li><Link to="/">Layout</Link></li>
            <li><Link to="/Usememohook">USEMEMOHOOK</Link></li>
            <li><Link to="/Usecallbackhook">Usecallbackhook</Link></li>
            <li><Link to="/Usecontexthook">Usecontexthook</Link></li>
        </ul>
        {console.log('Layout')}
        <Outlet/>

    </div>
  )
}

export default Layout