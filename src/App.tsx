import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

import "./App.css"

function App() {
  return (
    <div>
      <MyNav />
      <Home />
    </div>
  )
}

export default App
