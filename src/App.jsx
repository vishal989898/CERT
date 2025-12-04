
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavbarCom from './Component/Header/NavbarCom'
import Section from './Component/Main/Section'
import Footer from './Component/FooterComp/Footer'


function App() {
  return (
    <BrowserRouter>
    <NavbarCom/>
    <Section/>
    <Footer/>
    </BrowserRouter>
  
  
  )
}

export default App

