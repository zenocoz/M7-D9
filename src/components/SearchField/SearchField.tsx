import React, { Component } from "react"
import { Form, FormControl, Button } from "react-bootstrap"

interface State {
  results: object[]
  keyword: string
}

export default class SearchField extends Component<{}, State> {
  state = {
    results: [],
    keyword: "",
  }

  config = {}

  handleChange = (e: any) => {
    this.setState({ keyword: e.target.value })
  }

  submitSearch = async (e: any) => {
    console.log("CLicked")
    e.preventDefault()
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.keyword}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "f8be2f0c65mshfad5043cb400d5dp12eb36jsn70f4e3e3750f",
          },
        }
      )
      let data = await response.json()
      this.setState({ results: data })
      console.log(this.state.results)
    } catch (error) {
      console.log(error)
    }
    this.setState({ keyword: "" })
  }
  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Music"
          className="mr-sm-2"
          onChange={this.handleChange}
        />
        <Button variant="outline-info" onClick={this.submitSearch}>
          Search
        </Button>
      </Form>
    )
  }
}
