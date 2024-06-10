import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <ul>
            <li><Link to="/">Hook</Link></li>
            <li><Link to="/Usememohook">useMemo Hook</Link></li>
            <li><Link to="/Usecallbackhook">useCallback Hook</Link></li>
            <li><Link to="/Usecontexthook">useContext Hook</Link></li>
            <li><Link to="/Usereducerhook">useReducer Hook</Link></li>
            <li><Link to="/Userefhook">useRef Hook</Link></li>
            <li><Link to="/Usestatehook">useState Hook</Link></li>
            <li><Link to="/Useeffecthook">useEffect Hook</Link></li>
            <li><Link to="/High_Order_Components">HOC(High Order Components)</Link></li>
            <li><Link to="/Conditonal_Rendering">Conditonal Rendering</Link></li>
            <li><Link to="/List_and_key">List & Key</Link></li>
            <li><Link to="/Props_vs_State">Props vs State</Link></li>

        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout