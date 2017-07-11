import React from 'react'
import ActorSelector from '../components/ActorSelector'
import MovieSelector from '../components/MovieSelector'
import {MovieDetail} from '../components/MovieDetail'

class MoviesContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      actor: null,
      movies: [],
      focusMovie: null
    }
    this.handleActorSubmit = this.handleActorSubmit.bind(this)
    this.performXMLHttpRequest = this.performXMLHttpRequest.bind(this)
  }

  handleActorSubmit(actor){
    actor.id = 1
    this.setState({actor})
    this.performXMLHttpRequest(actor.firstName, actor.lastName)
  }

  performXMLHttpRequest(first, last){
    const url = "http://netflixroulette.net/api/api.php?actor=" + first + "%20" + last
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      if (request.status !== 200) return
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.setState({movies: data})
    }
    request.send()
  }

  setFocusMovie(movie){
    this.setState({focusMovie: movie})
  }
  render(){
    return(
      <div>
        <ActorSelector submitActor={this.handleActorSubmit} />
        <MovieSelector movieList={this.state.movies} selectMovie={this.setFocusMovie.bind(this)}/>
        <MovieDetail movie={this.state.focusMovie} />
      </div>
    )
  }




}

export default MoviesContainer
