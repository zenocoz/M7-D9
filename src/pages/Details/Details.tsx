import React, { useEffect } from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { RouteComponentProps, withRouter } from "react-router-dom"
// import ISongDetails from "../../types/songDetailsInterface"

class Details extends React.Component<RouteComponentProps> {
  // componentDidMount = async () => {
  //     try{

  //         let response = await fetch(
  //             `https://deezerdevs-deezer.p.rapidapi.com/track/${this.props.match.params.id}`,
  //             {
  //               method: "GET",
  //               headers: {
  //                 "X-RapidAPI-Key":
  //                   "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
  //               },
  //             }
  //     }
  //     catch(err){console.log(err)}
  // }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(Details)
