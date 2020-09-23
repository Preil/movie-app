import React from "react";
import MovieCreateForm from '../../../components/movieCreateForm'
import {getMovieById} from "../../../actions";

class EditMovie extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }

  state = {
    movie: {
      name: '',
      description: '',
      rating: '',
      image: '',
      cover: '',
      longDesc: '',
      genre: ''
    }
  }

  componentDidMount() {
    const {id} = this.props.query
    getMovieById(id).then(movie => {
      this.setState({movie})
    })
  }

  render() {
    const {movie} = this.state
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        {JSON.stringify(movie)}
        <MovieCreateForm initialData={movie}/>
      </div>
    )
  }

}

export default EditMovie