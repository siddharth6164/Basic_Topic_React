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
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
