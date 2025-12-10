
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Section from './Component/Main/Section'
import Footer from './Component/FooterComp/Footer'
import NavbarCom from './Component/head/Navcomp'


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

