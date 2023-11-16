import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Movieslider from "./Components/Movieslider"
import Iptvinfo from "./Components/Iptvinfo"
function App() {

  return (
    <>  
      <Navbar/>
      <Hero/>
      <Movieslider/>
      <Iptvinfo/>
    </>
  )
}

export default App
