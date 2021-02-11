import React from "react"
import { ListGroup } from "react-bootstrap"
import { RouteComponentProps, withRouter } from "react-router-dom"
import ISongDetails from "../../types/songDetailsInterface"

// interface IProps {
//   results: { title: string; id: string }[]
// }
// type ISongDetails = RouteComponentProps & IProps

const Results = ({ results, history }: ISongDetails) => {
  return (
    <ListGroup>
      {results.map((res, index) => (
        <ListGroup.Item
          key={index}
          onClick={() => {
            history.push("/details/" + res.id)
          }}
        >
          <span>{res.title} </span> <span>duration: {res.duration} </span>{" "}
          <span>album: {res.album.title}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default withRouter(Results)
