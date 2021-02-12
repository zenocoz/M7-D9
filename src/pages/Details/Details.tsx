import React, { useEffect } from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { RouteComponentProps, withRouter } from "react-router-dom"
// import ISongDetails from "../../types/songDetailsInterface"
import { ISongShort, Album } from "../../types/songInterface"

interface IAddId {
  id: string
}

interface ICustomState {
  song: ISongShort
}

class Details extends React.Component<
  RouteComponentProps<IAddId>,
  ICustomState
> {
  state = {
    song: { title: "", md5_image: "" },
  }
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/track/+${this.props.match.params.id}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
          },
        }
      )
      let data: ISongShort = await response.json()
      console.log(data)
      this.setState({ song: data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.state.song.md5_image} />
        <Card.Body>
          <Card.Title>
            {this.state.song !== null ? this.state.song.title : " "}
          </Card.Title>
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

export default Details
