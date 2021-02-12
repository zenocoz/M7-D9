import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import { Route } from "react-router-dom"
import Details from "./pages/Details/Details"

import "./App.css"

function App() {
  return (
    <div>
      <MyNav />
      <Route path="/" exact render={(props) => <Home />} />

      <Route path="/details/:id" render={(props) => <Details {...props} />} />
    </div>
  )
}

export default App
