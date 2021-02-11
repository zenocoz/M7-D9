import { render } from "@testing-library/react"
import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

class MyNav extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Music Search Engine</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
          </Nav>
        </Navbar>
        <br />
      </>
    )
  }
}

export default MyNav
