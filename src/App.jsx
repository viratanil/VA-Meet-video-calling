import { useState } from 'react'
import { BrowserRouter, Routes , Route} from "react-router-dom"
import Home from "./components/Home"
import Videocomp from "./components/Videocomp";

function App() {

  return (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/room/:roomID" element={<Videocomp />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
