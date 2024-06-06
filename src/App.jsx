import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Usememohook from './components/Usememohook'
import Usecallbackhook from './components/Usecallbackhook'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
        <Route path="/Usememohook" element={<Usememohook/>} />
        <Route path="/Usecallbackhook" element={<Usecallbackhook/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
