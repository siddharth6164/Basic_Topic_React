import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <ul>
            <li><Link to="/">Layout</Link></li>
            <li><Link to="/Usememohook">useMemo Hook</Link></li>
            <li><Link to="/Usecallbackhook">useCallback Hook</Link></li>
            <li><Link to="/Usecontexthook">useContext Hook</Link></li>
            <li><Link to="/Usereducerhook">useReducer Hook</Link></li>
            <li><Link to="/Userefhook">useRef Hook</Link></li>
        </ul>
        {console.log('Layout')}
        <Outlet/>

    </div>
  )
}

export default Layout