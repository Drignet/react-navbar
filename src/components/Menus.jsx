import { BrowserRouter as Router, Routes, Route , NavLink} from "react-router-dom"
import {useState} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import NoPage from './pages/NoPage'
import menu from '../images/free_icon_1.svg'

const Menus = () => {
const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <Router>
      <nav className="nav">
      <div className="mobile-icon" onClick={handleShow}>
        <img src={menu} width="60" height="70" alt="menu" />
      </div>
        <ul className={`ul ${show ? "mobile" : ""}`}>
          <li>
            <NavLink className="menu" to='/' onClick={handleShow}>Home</NavLink>
          </li>
          <li>
            <NavLink className="menu" to='/about' onClick={handleShow}>About</NavLink>
          </li>
          <li>
            <NavLink className="menu" to='/products' onClick={handleShow}>Products</NavLink>
          </li>
          <li>
            <NavLink className="menu" to='/services' onClick={handleShow}>Services</NavLink>
          </li>
          <li>
            <NavLink className="menu" to='/contacts' onClick={handleShow}>Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
    )
}
export default Menus