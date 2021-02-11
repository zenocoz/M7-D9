import React from "react"
import { ListGroup } from "react-bootstrap"

interface Props {
  results: { title: string }[]
}

export default function Results(props: Props) {
  return (
    <ListGroup>
      {props.results.map((res) => (
        <ListGroup.Item>{res.title}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}
