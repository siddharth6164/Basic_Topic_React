import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Usememohook from './components/Hooks/Usememohook'
import Usecallbackhook from './components/Hooks/Usecallbackhook'
import Usecontexthook from './components/Hooks/Usecontexthook'
import Usereducerhook from './components/Hooks/Usereducerhook'
import Userefhook from './components/Hooks/Userefhook'
import Usestatehook from './components/Hooks/Usestatehook'
import Useeffecthook from './components/Hooks/Useeffecthook'
import HOC from './components/HOC/HOC'
import InsideLayout from './components/PropsvsState/InsideLayout'
import ParentComponent from './components/PropsvsState/ParentComponent'
import State from './components/PropsvsState/State'
import ConditonalRender from './components/ConditonalRendering/ConditonalRender'
import Listandkey from './components/ListandKey/Listandkey'

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
        <Route path="/Conditonal_Rendering" element={<ConditonalRender/>} />
        <Route path="/List_and_key" element={<Listandkey/>} />
        <Route path="/Props_vs_State" element={<InsideLayout/>}>
          <Route path="/Props_vs_State/Props" element={<ParentComponent/>}/>
          <Route path="/Props_vs_State/State" element={<State/>} />
        </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
