import React from 'react'

class MovieSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    const newIndex = event.target.value
    this.setState({selectedIndex: newIndex})
    const selectedMovie = this.props.movieList[newIndex]
    this.props.selectMovie(selectedMovie)
  }

  render(){
    if (!this.props.movieList) return null

    const options = this.props.movieList.map((movie, index) => {
      return <option value={index} key={index}>{movie.show_title}</option>
    })

    return(
      <select
        id="movies"
        value={this.state.selectedIndex}
        onChange={this.handleChange.bind(this)}>
        {options}
      </select>
    )
  }
}

export default MovieSelector
