import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/FunctionalComponents/home.jsx'
import About from './components/FunctionalComponents/about.jsx'
import ClassComponent from './components/ClassComponents/classcompEG.jsx'
import Gallery from './components/FunctionalComponents/gallery.jsx'
import Contact from './components/FunctionalComponents/contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <ClassComponent/>
    <Gallery/>
    <Contact/><hr/>
  </StrictMode>
)