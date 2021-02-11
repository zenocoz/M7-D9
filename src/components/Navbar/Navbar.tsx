import { render } from "@testing-library/react"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

class MyNav extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Music Search Engine</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </>
    )
  }
}

export default MyNav
