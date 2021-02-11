import React from "react"
import SearchField from "../../components/SearchField/SearchField"
import { Container, Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="mt-5 offset-4">
          <SearchField />
        </Col>
      </Row>
    </Container>
  )
}
