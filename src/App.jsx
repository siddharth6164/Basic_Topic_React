import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Usememohook from './components/Usememohook'
import Usecallbackhook from './components/Usecallbackhook'
import Usecontexthook from './components/Usecontexthook'
import Usereducerhook from './components/Usereducerhook'
import Userefhook from './components/Userefhook'
import Usestatehook from './components/Usestatehook'
import Useeffecthook from './components/Useeffecthook'
import HOC from './components/HOC/HOC'
import InsideLayout from './components/PropsvsState/InsideLayout'
import ParentComponent from './components/PropsvsState/ParentComponent'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
        <Route path="/Usememohook" element={<Usememohook/>} />
        <Route path="/Usecallbackhook" element={<Usecallbackhook/>} />
        <Route path="/Usecontexthook" element={<Usecontexthook/>} />
        <Route path="/Usereducerhook" element={<Usereducerhook/>} />
        <Route path="/Userefhook" element={<Userefhook/>} />
        <Route path="/Usestatehook" element={<Usestatehook/>} />
        <Route path="/Useeffecthook" element={<Useeffecthook/>} />
        <Route path="/High_Order_Components" element={<HOC/>} />
        <Route path="/Props_vs_State" element={<InsideLayout/>}>
          <Route path="/Props_vs_State/Props" element={<ParentComponent/>}/>
        </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
