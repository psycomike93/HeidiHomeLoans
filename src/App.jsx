import './App.css'
import './index.css'
import { useState } from "react";
import {Navbar} from './components/Navbar'
import {MobileMenu} from './components/MobileMenu'


function App() {
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  )
}

export default App
