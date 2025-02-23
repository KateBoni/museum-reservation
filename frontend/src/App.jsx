import React, { useState } from 'react';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        
          <Routes>
            <Route path="/" element={ <Home /> } />
      
          </Routes>
          
    </BrowserRouter>
    </>
  )
}

export default App
