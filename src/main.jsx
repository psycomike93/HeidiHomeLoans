import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {Services} from './pages/Services'
import {Contact} from './pages/Contact'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <HashRouter>
      <Routes>
      <Route path = '/' element={<Home/>}/>
   
      </Routes>
    </HashRouter>

  </StrictMode>,
)
