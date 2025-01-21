import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/FunctionalComponents/home.jsx'
import About from './components/FunctionalComponents/about.jsx'
import ClassComponent from './components/ClassComponents/classcompEG.jsx'
import Gallery from './components/FunctionalComponents/gallery.jsx'
import Contact from './components/FunctionalComponents/contact.jsx'
import Navbar from './components/FunctionalComponents/navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Navbar/>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
 </Routes>

    </BrowserRouter>
  </StrictMode>
)