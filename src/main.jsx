import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home'
import { Services} from './pages/Services'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
   <HashRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "services" element = {<Services/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "contact" element = {<Contact/>}/>
    </Routes>
   </HashRouter>
  </StrictMode>,
)
