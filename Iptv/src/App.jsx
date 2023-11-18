import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Movieslider from "./Components/Movieslider"
import Iptvinfo from "./Components/Iptvinfo"
import Pricing from "./Components/Pricing"
import Streamingservices from "./Components/Streamingservices"
import Contact from "./Components/Contact"
import Footer from './Components/Footer'
function App() {

  return (
    <>  
      <Navbar/>
      <Hero/>
      <Movieslider/>
      <Iptvinfo/>
      <Pricing/>
      <Streamingservices/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
