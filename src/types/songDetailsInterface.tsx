import { RouteComponentProps } from "react-router-dom"

interface IProps {
  results: {
    title: string
    id: string
    duration: string
    album: { title: string }
  }[]
}
type ISongDetails = RouteComponentProps & IProps

export default ISongDetails
